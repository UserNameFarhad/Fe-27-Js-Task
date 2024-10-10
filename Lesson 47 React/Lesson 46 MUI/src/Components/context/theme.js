import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                variant: "outlined",
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: "capitalize"
                }
            }
        }
    }
})

export default theme;

createTheme