import { createTheme, Theme } from '@mui/material/styles';

export const CustomTheme = (outerTheme: Theme) =>
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
            '--TextField-brandFontFamily': "'Mulish', sans-serif",
            '& label': {
              color: '#D9D9D9',
              fontSize: '15px',
              fontFamily: 'var(--TextField-brandFontFamily)',
              // '@media (min-width: 2560px)': {
              //   fontSize: '30px',
              //   paddingBottom: '30px',
              //   fontFamily: 'var(--TextField-brandFontFamily)',
              // },
            },
            '& label.Mui-focused': {
              color: '#D9D9D9',
              fontFamily: 'var(--TextField-brandFontFamily)',
              // '@media (min-width: 2560px)': {
              //   fontSize: '30px',
              //   paddingBottom: '20px',
              //   fontFamily: 'var(--TextField-brandFontFamily)',
              // },
            },
            '& label.MuiInputLabel-shrink': {
              color: '#D9D9D9',
              fontFamily: 'var(--TextField-brandFontFamily)',
              // '@media (min-width: 2560px)': {
              //   fontSize: '30px',
              //   paddingBottom: '20px',
              //   fontFamily: 'var(--TextField-brandFontFamily)',
              // },
            },
            '& input': {
              color: '#EEEEEE',
              paddingBottom: '10px',
              fontSize: '15px',
              fontFamily: 'var(--TextField-brandFontFamily',
              fontWeight: 'bold',
              // '@media (min-width: 2560px)': {
              //   fontSize: '30px',
              //   paddingBottom: '20px',
              //   fontFamily: 'var(--TextField-brandFontFamily)',
              //   fontWeight: 'bold',
              // },
            },
            '&:focus-within input': {
              paddingBottom: '0',
              // '@media (min-width: 2560px)': {
              //   padding: '20px',
              // },
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '1px solid var(--TextField-brandBorderColor)',
              color: '#D9D9D9',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
              color: '#D9D9D9',
            },
            '&.Mui-focused:after': {
              borderBottom:
                '1px solid var(--TextField-brandBorderFocusedColor)',
              color: '#D9D9D9',
            },
          },
        },
      },
    },
  });
