import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../components/common/copy-right';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import firebase from '../lib/firebase';


export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email: string | undefined = data.get('email')?.toString();
    let password: string | undefined = data.get('password')?.toString();
    console.log({
      email: email,
      password: password,
    });
    if (!email || !password) return;

    firebase.signInWithEmailAndPassword(firebase.getAuth(), email, password)
    .then(res => {
      console.log('Success login.')
    }).catch(err => {
      console.log('Login error: ', err.code)
    })
  };

  return (
        <div>
          <Grid2 container spacing={2} sx={{height: "100vh", margin: "0"}}>
            <Grid2 xs={8} sx={{padding: "0"}}>
              <div className='login-image'></div>
            </Grid2>
            <Grid2 xs={4} sx={{backgroundColor: "#f9f9f9"}}>
              <Container>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ height: "60px", width: "60px", m: 1, bgcolor: 'secondary.main' }}>
                  <div className='iskali-logo'></div>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Iniciar Sesion
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Enviar
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Olvidaste tu contraseña?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Aun no tienes una cuenta? Registrate"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </Grid2>
          </Grid2>
        </div>
  );
}