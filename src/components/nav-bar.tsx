import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    const logoImageUrl: string = "https://firebasestorage.googleapis.com/v0/b/spa-clinic-709c5.appspot.com/o/toallas-image.jpg?alt=media&token=c793adb6-5ed7-4c83-aa5e-38da353ec620";
    
    return <div>
        <AppBar position="static" sx={{backgroundColor: "white", color: "#649ecc"}}>
            <Toolbar variant="dense">
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={logoImageUrl} />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
        Nav Bar!!
    </div>
}