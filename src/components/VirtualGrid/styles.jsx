import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    virtualGrid: {
        '&:focus': {
            outline: 0,
        },
    },
});

export { useStyles };
