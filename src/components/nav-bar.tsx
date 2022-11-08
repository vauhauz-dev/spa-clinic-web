import { AppBar, Avatar, Badge, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";
import Grid from '@mui/material/Unstable_Grid2';

export default function NavBar() {
    const router = useRouter()
    const logoImageUrl: string = "https://firebasestorage.googleapis.com/v0/b/spa-clinic-709c5.appspot.com/o/iskali-logo.jpg?alt=media&token=67b6f5de-e954-4f19-b188-abd2d670e858";
    
    return <AppBar position="static" sx={{backgroundColor: "white", color: "#649ecc"}}>
            <Grid container spacing={2}>
                <Grid xs={12} sm={4}>
                    <Toolbar variant="dense">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={logoImageUrl} />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div" marginLeft="15px">
                            Iskali Natural Spa
                        </Typography>
                    </Toolbar>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Toolbar variant="dense">
                        <Container>
                        <Button onClick={() => router.push('/')} variant="text" sx={{margin: '0 0 0 20px'}}>Clientes</Button>
                        <Button onClick={() => router.push('/appointments')} variant="text" sx={{margin: '0 0 0 20px'}}>Citas</Button>
                        <Button onClick={() => router.push('/treatments')} variant="text" sx={{margin: '0 0 0 20px'}}>Tratamientos</Button>
                        <Badge badgeContent={4} color="error" sx={{height: '25px'}} className="custom-badge">
                            <Button variant="text" onClick={() => router.push('/alerts')} sx={{margin: '0 0 0 20px'}}>Alertas</Button>
                        </Badge>
                        </Container>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
}