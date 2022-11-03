import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    const logoImageUrl: string = "https://firebasestorage.googleapis.com/v0/b/spa-clinic-709c5.appspot.com/o/iskali-logo.jpg?alt=media&token=67b6f5de-e954-4f19-b188-abd2d670e858";
    
    return <div>
        <AppBar position="static" sx={{backgroundColor: "white", color: "#649ecc"}}>
            <Toolbar variant="dense">
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={logoImageUrl} />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div" marginLeft="15px">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
        Nav Bar!!
    </div>
}