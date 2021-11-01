import { createTheme } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core";

const themeOptions: ThemeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#94760c',
      },
      secondary: {
        main: '#854725',
      },
      warning: {
        main: '#fb8c00',
      }
    },
    spacing: 8,
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none'
            }
        }
    }
};

export const theme = createTheme(themeOptions);
