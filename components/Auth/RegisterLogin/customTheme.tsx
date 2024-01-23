import { createTheme, Theme } from '@mui/material/styles';

export const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    breakpoints: {
      values: {
        xs: 280,
        sm: 320,
        md: 600,
        lg: 1000,
        xl: 1440,
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#504E48',
            '--TextField-brandBorderHoverColor': '#78756C',
            '--TextField-brandBorderFocusedColor': '#78756C',
            '& label': {
              color: 'var(--TextField-brandBorderColor)',
              fontSize: '14px',
            },
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
            '& label.MuiInputLabel-shrink': {
              color: 'var(--TextField-brandBorderColor)',
            },
            '& input': {
              color: '#EEEEEE',
              paddingBottom: '10px',
              fontSize: '14px',
            },
            '&:focus-within input': {
              paddingBottom: '0',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '1px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom:
                '1px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });
