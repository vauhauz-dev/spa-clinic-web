import { Link, Typography } from "@mui/material";

export default function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Todos los Derechos Reservados
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}