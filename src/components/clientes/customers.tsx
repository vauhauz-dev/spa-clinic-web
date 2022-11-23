import { alpha, AppBar, Box, Button, Chip, Dialog, IconButton, InputBase, Paper, Slide, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from "react";
import axios from "axios";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = useState<any>(null);

  const handleClickOpen = (item) => {
    setOpen(true);
    setCustomer(item)
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get('https://iskali-backend.azurewebsites.net/api/customer')
    .then(res => {
      setCustomers(res.data);
    }).catch(err => {
      console.error('error calling customers service', err)
    })
  }, [])
  
  return <><Box sx={{padding: '25px', backgroundColor: '#e9e9e9', marginTop: '10px'}}>
        <Paper sx={{marginBottom: '10px', padding: '10px', backgroundColor: '#649ecc'}}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={4} xl={4}>
                <Typography variant="h5" sx={{color: 'white'}}>
                    Clientes
                </Typography>
              </Grid>
              <Grid xs={12} sm={8} xl={8}>
                <Search>
                      <SearchIconWrapper>
                          <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                      placeholder="Buscar Cliente…"
                      inputProps={{ 'aria-label': 'search' }}
                      />
                  </Search>
              </Grid>
            </Grid>
        </Paper>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Ciudad</TableCell>
            <TableCell align="center">Estatus</TableCell>
            <TableCell align="center">Último Pago</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, ":hover": { backgroundColor: 'lightgray'} }}
              onClick={() => handleClickOpen(row)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center" >
                <Chip onClick={() =>{}} label={row.paymentStatus} sx={{color: row.paymentStatus == 'COMPLETO' ? 'green' : 'orange'}} variant="outlined" />
              </TableCell>
              <TableCell align="center">{row.lastPayment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Customer: {customer?.name ?? ''}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </>
}