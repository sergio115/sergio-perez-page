import { createTheme, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

import { colors } from '../public/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue,
      contrastText: colors.white,
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: colors.navy
        },
      },
    },

    MuiButton: {
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            backgroundColor: colors.beige,
            color: colors.black,
            ':hover': {
              backgroundColor: colors.blue,
              color: colors.beige,
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            color: colors.white,
          },
        },
      ],
    },
  },
});
