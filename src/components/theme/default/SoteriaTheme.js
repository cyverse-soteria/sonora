import { createTheme } from "@mui/material/styles";
import palette from "./SoteriaPalette";

/**
 * Creates and returns a new theme.
 *
 * @param {object} theme - A theme to override/add on to the default ui-lib theme.
 * @returns {object}
 */
const getMuiTheme = () =>
    createTheme({
        palette: {
            mode: "light",

            // All intentions should be defined with references to colors from the new palette.
            primary: {
                main: palette.uaAzurite,
            },
            background: {
                default: "#FFFFFF",
            },
            secondary: {
                main: palette.uaOasis,
            },
            error: {
                main: palette.alertRed,
            },
            warning: {
                main: palette.yellow,
            },
            info: {
                main: palette.uaAzurite,
            },
            success: {
                main: palette.uaLeaf,
            },
            action: {
                hover: "rgba(0, 0, 0, 0.1)", // was 0.04
                hoverOpacity: 0.1,
                selected: "rgba(0, 0, 0, 0.2)", // was 0.08
                selectedOpacity: 0.2,
            },

            ...palette, // allow all of the colors to be referenced in the palette.
        },
        typography: {
            button: {
                textTransform: "none",
            },
            useNextVariants: true,
        },
    });

export { getMuiTheme };
