import { PropsOf } from "@emotion/react";
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
 
interface Props
{
    darkMode: boolean;
    handleThemeChange: ()=>void;
}
export default function Header({darkMode,handleThemeChange}: Props){
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    Re-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}