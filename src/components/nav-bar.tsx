import { AppBar, Avatar, Badge, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter()
    const logoImageUrl: string = "https://firebasestorage.googleapis.com/v0/b/spa-clinic-709c5.appspot.com/o/iskali-logo.jpg?alt=media&token=67b6f5de-e954-4f19-b188-abd2d670e858";
    
    return <AppBar position="static" sx={{backgroundColor: "white", color: "#649ecc"}}>
            <Toolbar variant="dense">
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={logoImageUrl} />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div" marginLeft="15px">
                    Iskali Natural Spa
                </Typography>
                <Container maxWidth="sm" sx={{paddingTop: '8px', paddingBottom: '3px'}} className="nav-bar-container">
                    <Button onClick={() => router.push('/')} variant="text" sx={{margin: '0 0 0 20px'}}>Clientes</Button>
                    <Button onClick={() => router.push('/appointments')} variant="text" sx={{margin: '0 0 0 20px'}}>Citas</Button>
                    <Button onClick={() => router.push('/treatments')} variant="text" sx={{margin: '0 0 0 20px'}}>Tratamientos</Button>
                    <Badge badgeContent={4} color="error" sx={{height: '25px'}} className="custom-badge">
                        <Button variant="text" onClick={() => router.push('/alerts')} sx={{margin: '0 0 0 20px'}}>Alertas</Button>
                    </Badge>
                </Container>
            </Toolbar>
        </AppBar>
}