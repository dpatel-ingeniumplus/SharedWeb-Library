import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    virtualTable: {
        '& .ReactVirtualized__Table__Grid': {
            '&:focus': {
                outline: 0,
            },
            overflow: 'visible',
        },
        '& .ReactVirtualized__Grid__innerScrollContainer': {
            overflow: 'visible !important',
        },
    },
});

export { useStyles };
