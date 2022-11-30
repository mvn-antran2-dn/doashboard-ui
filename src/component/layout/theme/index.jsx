import { createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(64, 122, 214)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.5)',
    },
    background: {
      default: 'rgb(27, 38, 53)',
      paper: 'rgb(35, 48, 68)',
    },
    text: {
      primary: '#FFFFFF', 
      secondary: '#FFFFFF', 
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'unset',
          borderBottom: '1px solid rgb(81, 81, 81)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
         backgroundImage: 'unset',
        },
      },
    },
    MuiBreadcrumbs : {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#233044',
          input: {
            backgroundColor: '#233044',
            '&:hover': {
              backgroundColor: 'rgb(18, 26, 36)',
            },
            color: 'rgb(224, 224, 224)',
          },
        },
      },
    },
  },
});
const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#f7f9fd', 
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)', 
      secondary: 'rgba(0, 0, 0, 0.6)', 
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.6)',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'unset',
          borderBottom: '1px solid rgb(224, 224, 224)',
        },
      },
    },
    MuiBreadcrumbs : {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255, 255, 255)',
          input: {
            backgroundColor: 'rgb(255, 255, 255)',
            '&:hover': {
              backgroundColor: 'rgb(242, 242, 242)',
            },
            color: 'rgb(158, 158, 158)',
          },
        },
      },
    },
  },
});

export {darkTheme,defaultTheme}