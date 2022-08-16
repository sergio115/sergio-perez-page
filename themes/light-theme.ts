import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

import { colors } from '../public/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: colors.white_background,
      paper: colors.white,
    },
    primary: {
      main: colors.purple,
      contrastText: colors.black,
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: colors.black,
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          color: colors.black,
        },
      },
    },

    MuiButton: {
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            backgroundColor: colors.purple,
            color: colors.white,
            ':hover': {
              backgroundColor: colors.purple_light,
              color: colors.purple,
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            color: colors.black,
          },
        },
      ],
    },
  },
});
