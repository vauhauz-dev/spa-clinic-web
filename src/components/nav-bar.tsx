import { AppBar, Avatar, Badge, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Grid from '@mui/material/Unstable_Grid2';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar() {
    const router = useRouter()
    const logoImageUrl: string = "https://firebasestorage.googleapis.com/v0/b/spa-clinic-709c5.appspot.com/o/iskali-logo.jpg?alt=media&token=67b6f5de-e954-4f19-b188-abd2d670e858";
    const [anchorEl, setAnchorEl] = useState<any>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <AppBar position="static" sx={{backgroundColor: "white", color: "#649ecc", top: 'auto'}}>
            <Grid container >
                <Grid xs={12} sm={3}>
                    <Toolbar variant="dense">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={logoImageUrl} />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div" marginLeft="15px">
                            Iskali Natural Spa
                        </Typography>
                        <IconButton aria-label="more"
                            id="long-button"
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{display: {xs: 'block', sm: 'none'}, position: 'absolute', right: '10px'}}>
                            <MenuIcon />
                        </IconButton>
                        <Menu id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{ style: { maxHeight: 48 * 4.5, width: '20ch' } }}>
                            <MenuItem key={1} onClick={() => router.push('/')}>Clientes</MenuItem>
                            <MenuItem key={1} onClick={() => router.push('/appointments')}>Citas</MenuItem>
                            <MenuItem key={1} onClick={() => router.push('/treatments')}>Tratamientos</MenuItem>
                            <MenuItem key={1} onClick={() => router.push('/alerts')}>Alertas</MenuItem>
                        </Menu>
                    </Toolbar>
                </Grid>
                <Grid xs={12} sm={7}>
                    <Toolbar variant="dense" sx={{display: {xs: 'none', sm: 'flex'}}}>
                        <Button onClick={() => router.push('/')} variant="text" sx={{margin: '0 0 0 20px'}}>Clientes</Button>
                        <Button onClick={() => router.push('/appointments')} variant="text" sx={{margin: '0 0 0 20px'}}>Citas</Button>
                        <Button onClick={() => router.push('/treatments')} variant="text" sx={{margin: '0 0 0 20px'}}>Tratamientos</Button>
                        <Badge badgeContent={4} color="error" className="custom-badge">
                            <Button variant="text" onClick={() => router.push('/alerts')} sx={{margin: '0 0 0 20px'}}>Alertas</Button>
                        </Badge>
                    </Toolbar>
                </Grid>
                <Grid xs={12} sm={2}>
                    <Toolbar variant="dense">
                        <Button onClick={() => router.push('/logout')} variant="contained" size="small" color="info" sx={{ margin: '0 20px 0 20px' }} endIcon={<LogoutIcon />}>Salir</Button>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
}