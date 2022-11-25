import { alpha, AppBar, Box, Button, Chip, Dialog, IconButton, InputBase, Paper, Slide, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from "react";
import axios from "axios";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import CustomerDetails from "./customer-detail";
import CustomersTable from "./customers-table";

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
  const [customers, setCustomers] = useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = useState<any>(null);

  const handleClickOpen = (item: any) => {
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
      <CustomersTable customers={customers} handleClick={handleClickOpen}></CustomersTable>
    </TableContainer>
    </Box>
    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <CustomerDetails handleClose={handleClose} customer={customer}></CustomerDetails>
      </Dialog>
    </>
}