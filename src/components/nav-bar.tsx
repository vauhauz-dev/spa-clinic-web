import { AppBar, Avatar, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter()
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
                <Container maxWidth="sm">
                    <Button onClick={() => router.push('/')} variant="text" sx={{margin: '0 10px 0 10px'}}>Clientes</Button>
                    <Button onClick={() => router.push('/appointments')} variant="text" sx={{margin: '0 10px 0 10px'}}>Citas</Button>
                    <Button onClick={() => router.push('/treatments')} variant="text" sx={{margin: '0 10px 0 10px'}}>Tratamientos</Button>
                    <Button onClick={() => router.push('/alerts')} variant="text" sx={{margin: '0 10px 0 10px'}}>Alertas</Button>
                </Container>
            </Toolbar>
        </AppBar>
    </div>
}