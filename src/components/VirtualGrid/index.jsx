import { useEffect, useRef } from 'react';
import { Grid, InfiniteLoader } from 'react-virtualized';
import { useStyles } from './styles';

function VirtualGrid({
    initialRows,
    allRows,
    totalRowCount,
    loadedRowsMap,
    loadMoreRows,
    cellRenderer,
    ...gridProps
}) {
    const infiniteLoaderRef = useRef(null);
    const hasMountedRef = useRef(false);
    const gridRef = useRef(null);
    const classes = useStyles();

    // Each time initialRows prop changes call resetLoadMoreRowsCache to clear the cache
    useEffect(() => {
        if (hasMountedRef.current) {
            if (infiniteLoaderRef.current) {
                infiniteLoaderRef.current.resetLoadMoreRowsCache();
            }
        }
        hasMountedRef.current = true;
    }, [initialRows]);

    const { columnCount, columnWidth } = computeColumnLayout(gridProps.width);

    let gridOnRowsRendered = null;

    return (
        <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={totalRowCount}
            threshold={3}
            ref={infiniteLoaderRef}
        >
            {({ onRowsRendered, registerChild }) => {
                gridOnRowsRendered = onRowsRendered;
                return (
                    <Grid
                        ref={(grid) => {
                            gridRef.current = grid;
                            registerChild(grid);
                        }}
                        rowCount={Math.ceil(allRows.length / columnCount)}
                        cellRenderer={_cellRenderer}
                        onSectionRendered={onSectionRendered}
                        columnWidth={columnWidth}
                        columnCount={columnCount}
                        {...gridProps}
                        className={classes.virtualGrid}
                    />
                );
            }}
        </InfiniteLoader>
    );

    function computeColumnLayout(parentWidth) {
        let columnWidth = 350;
        let columnCount =
            parentWidth > 0 ? Math.floor(parentWidth / columnWidth) : 1;

        columnCount = Math.min(columnCount, allRows.length);

        if (columnCount === 0) {
            columnCount = 1;
        }

        // Stretch out column width to fit
        const maxColumnWidth = 550;
        columnWidth = Math.min(parentWidth / columnCount, maxColumnWidth);

        return { columnCount: columnCount, columnWidth: columnWidth };
    }

    function isRowLoaded({ index }) {
        // No entry in this map signifies that the row has never been loaded before
        // An entry (either LOADING or LOADED) can be treated as loaded as far as InfiniteLoader is concerned
        return !!loadedRowsMap[index];
    }

    function _cellRenderer({ rowIndex, columnIndex, style }) {
        var key = `c:${columnIndex}, r:${rowIndex}`;

        const gridItem = allRows[rowIndex * columnCount + columnIndex];

        if (gridItem !== undefined) {
            return cellRenderer(gridItem, key, style, columnWidth);
        }
        return null;
    }

    function onSectionRendered({
        columnStartIndex,
        columnStopIndex,
        rowStartIndex,
        rowStopIndex,
    }) {
        const startIndex = rowStartIndex * columnCount + columnStartIndex;
        const stopIndex = rowStopIndex * columnCount + columnStopIndex;
        gridOnRowsRendered({ startIndex: startIndex, stopIndex: stopIndex });
    }
}

export { VirtualGrid };
