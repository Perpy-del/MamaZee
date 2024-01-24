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
              '@media (min-width: 2560px)': {
                fontSize: '30px',
                paddingBottom: '30px',
              }
            },
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
              '@media (min-width: 2560px)': {
                fontSize: '30px',
                paddingBottom: '20px',
              } 
            },
            '& label.MuiInputLabel-shrink': {
              color: 'var(--TextField-brandBorderColor)',
              '@media (min-width: 2560px)': {
                fontSize: '30px',
                paddingBottom: '20px',
              }              
            },
            '& input': {
              color: '#EEEEEE',
              paddingBottom: '10px',
              fontSize: '14px',
              '@media (min-width: 2560px)': {
                fontSize: '30px',
                paddingBottom: '20px',
              }
            },
            '&:focus-within input': {
              paddingBottom: '0',
              '@media (min-width: 2560px)': {
                padding: '20px 0'
              }
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
