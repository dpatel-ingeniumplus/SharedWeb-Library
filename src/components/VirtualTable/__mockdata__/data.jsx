import { Checkbox, InputBase, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { MdArrowDownward, MdArrowUpward, MdSearch } from 'react-icons/md';

export const allRows = [
  {
    user_id: 28,
    name: 'Dev Patel',
    email: 'dpatel+test@ingeniumplus.com',
    role: 'Test 1',
    created_date: '2022-07-05T09:13:36.606635+00:00',
    modified_date: '2023-01-04T12:26:19.408931+00:00',
    modified_by_id: 1,
  },
  {
    user_id: 59,
    name: 'Anna',
    email: 'anna-demo-1-dev@ingeniumplus.com',
    role: 'User',
    created_date: '2023-04-05T06:56:48.216756+00:00',
    modified_date: '2023-06-06T14:29:39.935911+00:00',
    modified_by_id: 1,
  },
  {
    user_id: 63,
    name: 'TechOps',
    email: 'techops-demo-1-dev@ingeniumplus.com',
    role: 'User',
    created_date: '2023-04-05T08:37:11.82474+00:00',
    modified_date: '2023-06-16T12:34:34.137484+00:00',
    modified_by_id: 1,
  },
  {
    user_id: 62,
    name: 'Mike',
    email: 'mike-demo-1-dev@ingeniumplus.com',
    role: 'User',
    created_date: '2023-04-05T07:01:55.138384+00:00',
    modified_date: '2023-06-06T12:10:17.573763+00:00',
    modified_by_id: 1,
  },
  {
    user_id: 61,
    name: 'Cameron',
    email: 'cameron-demo-1-dev@ingeniumplus.com',
    role: 'User',
    created_date: '2023-04-05T07:00:37.081145+00:00',
    modified_date: '2023-06-06T12:10:07.297443+00:00',
    modified_by_id: 1,
  },
  {
    user_id: 58,
    name: 'Tom',
    email: 'tom-demo-1-dev@ingeniumplus.com',
    role: 'User',
    created_date: '2023-04-05T06:55:18.877804+00:00',
    modified_date: '2023-06-19T14:31:39.71079+00:00',
    modified_by_id: 1,
  },
  {
    user_id: 40,
    name: 'Tom',
    email: 'devuser@ingeniumplus.com',
    role: 'User',
    created_date: '2022-08-04T21:33:08.778103+00:00',
    modified_date: '2022-09-29T09:51:16.024786+00:00',
    modified_by_id: 1,
  },
];

export const loadedRowsMap = {};

export const loadMoreRows = () => {
  alert('Load more rows clicked');
};

export const columnDefinitions = [
  {
    classes: {},
    minWidth: 50,
    maxWidth: 50,
    width: 50,
    label: '',
    dataKey: 'user_id',
    padding: 'checkbox',
    cellLevel: 'user',
    numSelected: 0,
    rowCount: allRows.length,
    headerComponent: checkHeaderCell,
    component: checkCell,
    isSelected: () => {
      console.log('called...');
    },
  },
  {
    classes: {},
    minWidth: 50,
    maxWidth: 50,
    width: 50,
    label: '',
    dataKey: 'user_id',
    padding: 'none',
    actionCellLevel: 'user',
    headerComponent: labelHeader,
    component: labelCell,
  },
  {
    classes: {},
    flexGrow: 1,
    width: 120,
    minWidth: 120,
    label: 'Name',
    dataKey: 'name',
    padding: 'normal',
    sortDirection: '',
    sortBy: '',
    headerComponent: labelHeader,
    component: labelCell,
  },
  {
    classes: {},
    flexGrow: 1,
    width: 120,
    minWidth: 120,
    label: 'Email',
    dataKey: 'email',
    padding: 'normal',
    sortDirection: '',
    sortBy: '',
    headerComponent: labelHeader,
    component: labelCell,
  },
  {
    classes: {},
    flexGrow: 1,
    width: 120,
    minWidth: 120,
    label: 'Role',
    dataKey: 'role',
    padding: 'normal',
    sortDirection: '',
    sortBy: '',
    headerComponent: labelHeader,
    component: labelCell,
  },
];

export const tableClasses = {};

export const headerHeight = 40;
export const width = 945;
export const height = 653;
export const rowHeight = 60;

export const handleRowClick = () => {
  alert('Row clicked...');
};

export const tableStyles = makeStyles(
  (theme) => ({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      '&:focus': {
        outline: 'none !important',
      },
      cursor: 'pointer',
      overflow: 'visible !important',
      overflowWrap: 'anywhere',
    },
    scrollingFlexContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '4px',
      boxSizing: 'border-box',
      '&:focus': {
        outline: 'none !important',
      },
      cursor: 'pointer',
      overflow: 'auto !important',
      overflowWrap: 'anywhere',
    },
    tableRowHover: {
      '&.ReactVirtualized__Table__row': {
        '&:hover': {
          backgroundColor: '#ecf0f1 !important',
        },
        overflow: 'visible !important',
      },
    },
    tableCell: {
      flex: 1,
      color: '#34485E',
      '& .MuiCheckbox-colorSecondary.Mui-checked': {
        color: '#3598DB',
      },
      '& .MuiCheckbox-colorPrimary.Mui-checked': {
        color: '#3598DB',
      },
    },
    noClick: {
      cursor: 'initial',
    },
    launchLink: {
      color: '#7E8C8D',

      '& svg': {
        height: '20px',
        width: '20px',
      },
    },
    tableCellHeader: {
      textTransform: 'uppercase',
      color: '#7E8C8D',
      fontWeight: 'bold',
      fontSize: '10px',
    },
    selectedRow: {
      backgroundColor: '#FFFFFF',
    },
    activeCellContainer: {
      color: 'white',
      textAlign: 'center',
      borderRadius: '5px',
      width: '50%',
    },
    activeCell: {
      backgroundColor: '#18BC9B',
    },
    inactiveCell: {
      backgroundColor: '#E84C3C',
    },
    hidden: {
      display: 'none',
    },
    statusCell: {
      fontSize: 'xx-small',
      textTransform: 'uppercase',
      padding: '1px 15px',
      textAlign: 'center',
      width: '100px',
      border: 'solid',
      borderRadius: '20px',
      borderWidth: '1px',
    },
    approvedCell: {
      color: '#BDC3C7',
    },
    pendingCell: {
      color: '#3598DB',
    },
    rejectedCell: {
      color: '#E84C3C',
    },
    sortIndicatorContainer: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    inputRoot: {
      color: 'inherit',
      border: '1px solid #BDC3C7',
      borderRadius: '5px',
      height: '45px',
      maxWidth: '210px',
    },
    tooltip: {
      whiteSpace: 'pre',
    },
  }),
  { index: 1 }
);

function checkHeaderCell(props, column) {
  const {
    classes,
    numSelected,
    rowCount,
    handleSelectAllClick,
    hasHeaderSearchBar,
  } = column;

  return (
    <TableCell
      component="div"
      padding={column.padding}
      className={clsx(
        classes.tableCell,
        classes.flexContainer,
        classes.noClick,
        hasHeaderSearchBar && classes.searchBarWrapperAll
      )}
      variant="head"
      style={{ height: headerHeight }}
    >
      <Checkbox
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={handleSelectAllClick}
      />
    </TableCell>
  );
}

function labelHeader(props, column) {
  const { label } = props;
  const {
    classes,
    sortDirection,
    sortBy,
    handleSort,
    dataKey,
    allowHeaderSearchBar = false,
    onSearchChange,
    hasHeaderSearchBar = false,
  } = column;
  const isAscendingOrder = sortDirection === 'ASC' && dataKey === sortBy;
  const activeSort =
    sortBy == dataKey
      ? { fontSize: '16px', color: 'black' }
      : { fontSize: '16px' };
  return (
    <TableCell
      component="div"
      padding={column.padding}
      className={clsx(
        classes.tableCell,
        classes.flexContainer,
        classes.noClick,
        classes.tableCellHeader,
        hasHeaderSearchBar && classes.searchBarWrapperAll,
        allowHeaderSearchBar && classes.searchBarWrapper
      )}
      variant="head"
      style={{ height: headerHeight }}
      align={column.numeric ? 'right' : 'left'}
    >
      <span>{label}</span>
    </TableCell>
  );
}

function checkCell(props, column) {
  const { rowData } = props;
  const { classes, isSelected, handleClick, cellLevel } = column;
  const rowDataId = rowData[`${cellLevel}_id`];
  return (
    <TableCell
      component="div"
      padding={column.padding}
      className={clsx(classes.tableCell, classes.flexContainer)}
      style={{ height: rowHeight }}
    >
      <Checkbox
        checked={isSelected(rowDataId)}
        onClick={(event) => handleClick(event, rowDataId, rowData.display_name)}
      />
    </TableCell>
  );
}

function labelCell(props, column) {
  const { cellData, rowData } = props;
  const { classes, onClick } = column;
  let data = cellData;
  if (column.transform !== undefined) {
    data = column.transform(cellData, rowData);
  }
  return (
    <TableCell
      component="div"
      padding={column.padding}
      className={clsx(classes.tableCell, classes.scrollingFlexContainer)}
      variant="body"
      style={{ height: rowHeight }}
      align={column.numeric ? 'right' : 'left'}
      onClick={onClick ? () => onClick(rowData) : null}
    >
      {data}
    </TableCell>
  );
}
