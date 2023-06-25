import React, { useEffect, useRef } from 'react';
import { Table, Column, AutoSizer, InfiniteLoader } from 'react-virtualized';

import { useStyles } from './styles';
import { AppLoader } from 'components/AppLoader';
import { LoadingStatus } from 'helpers';

function VirtualTable({
  initialRows,
  allRows,
  totalRowCount,
  loadedRowsMap,
  loadMoreRows,
  columnDefinitions,
  cellClassName,
  disableHeader,
  loadingStatus = '',
  ...tableProps
}) {
  const infiniteLoaderRef = useRef(null);
  const hasMountedRef = useRef(false);
  const classes = useStyles();
  let minTableWidth = 0;

  columnDefinitions.forEach((element) => {
    if (element?.width) {
      minTableWidth += +element?.width;
    }
  });

  // Each time initialRows prop changes call resetLoadMoreRowsCache to clear the cache
  useEffect(() => {
    if (hasMountedRef.current) {
      if (infiniteLoaderRef.current) {
        infiniteLoaderRef.current.resetLoadMoreRowsCache();
      }
    }
    hasMountedRef.current = true;
  }, [initialRows]);

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={totalRowCount}
      ref={infiniteLoaderRef}
    >
      {({ onRowsRendered, ref }) => (
        <AutoSizer>
          {({ width }) => (
            <Table
              ref={ref}
              disableHeader={disableHeader}
              onRowsRendered={onRowsRendered}
              rowCount={allRows.length}
              rowGetter={({ index }) => allRows[index]}
              {...tableProps}
              width={
                minTableWidth > +tableProps?.width
                  ? minTableWidth
                  : +tableProps?.width
              }
              className={classes.virtualTable}
              noRowsRenderer={() =>
                loadingStatus === LoadingStatus.Loading ? (
                  <AppLoader
                    styles={{
                      width: '100%',
                      height: '100%',
                      borderBottom: '1px solid #e0e0e0',
                    }}
                  />
                ) : loadingStatus === LoadingStatus.Idle ? (
                  ''
                ) : (
                  <div
                    style={{
                      fontSize: '18px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      height: '100%',
                    }}
                  >
                    {loadingStatus}
                  </div>
                )
              }
            >
              {columnDefinitions.map(({ dataKey, ...other }, index) => (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={cellClassName}
                  cellRenderer={cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              ))}
            </Table>
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );

  function isRowLoaded({ index }) {
    // No entry in this map signifies that the row has never been loaded before
    // An entry (either LOADING or LOADED) can be treated as loaded as far as InfiniteLoader is concerned
    return !!loadedRowsMap[index];
  }

  function cellRenderer(props) {
    const { columnIndex } = props;

    if (columnIndex == null) return null;

    const column = columnDefinitions[columnIndex];

    return column.component(props, column);
  }

  function headerRenderer(props) {
    const { columnIndex } = props;
    const column = columnDefinitions[columnIndex];
    return column.headerComponent(props, column);
  }
}

export { VirtualTable };
