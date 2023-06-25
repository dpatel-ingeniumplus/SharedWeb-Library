import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import useStyles from './style';

export const AppLoader = ({
  isTable = false,
  colSpan = null,
  enableBorder = false,
  boxSize = 0,
  styles,
}) => {
  const classes = useStyles();

  if (isTable) {
    return (
      <tr>
        <td colSpan={colSpan}>
          <Spinner
            styles={styles}
            boxSize={boxSize}
            enableBorder={enableBorder}
            classes={classes}
          />
        </td>
      </tr>
    );
  }

  return (
    <Spinner
      styles={styles}
      boxSize={boxSize}
      enableBorder={enableBorder}
      classes={classes}
    />
  );
};

const Spinner = ({ styles, boxSize, enableBorder, classes }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={styles}
      alignItems="center"
      justifyContent="center"
      p={boxSize}
      className={enableBorder && classes.boxRadius}
    >
      <Fade in={true} unmountOnExit>
        <CircularProgress />
      </Fade>
    </Box>
  );
};
