import { AppBar, Toolbar, IconButton, Typography, Button, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Chip, Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const formatCurrency = require('format-currency')
import SendIcon from '@mui/icons-material/Send';
import StandarFormDialog from "../common/standar-form-dialog";
import { Fragment, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  handleClose: any;
  customer: any;
}

export default function CustomerDetails(props: Props) {
  const {window} = props;
  const { handleClose, customer } = props;
  const [formTitle, setFormTitle] = useState('')

  let opts = { format: '%s%v %c', code: 'USD', symbol: '$' }

  const [open, setOpen] = useState(false);

  const handleClickOpen = (title: string) => {
    setOpen(true);
    setFormTitle(title)
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={'1'} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Ciudad"} secondary={customer.city} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'2'} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Estatus de pago"} secondary={<>
              <Chip label={customer.paymentStatus} variant="outlined" />
            </>} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'3'} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Monto de adeudo"} secondary={formatCurrency(customer.amountOwed)} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'4'} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Ultimo pago"} secondary={new Date(customer.lastPayment).toLocaleString()} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'5'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalPhoneIcon />
            </ListItemIcon>
            <ListItemText primary={"Telefono"} secondary={customer.phoneNumber} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'6'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Correo"} secondary={customer.email} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  return <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {customer?.name ?? ''}
          </Typography>
          <Button variant="contained" size="small" color="info" sx={{ margin: '0 0 0 20px' }} onClick={() => handleClickOpen('Generar Cita')}>Generar Cita</Button>
          <Button variant="contained" size="small" color="info" sx={{ margin: '0 0 0 20px' }} onClick={() => handleClickOpen('Agregar Tratamiento')}>Agregar Tratamiento</Button>
          <Button variant="contained" size="small" color="info" sx={{ margin: '0 0 0 20px' }} onClick={() => handleClickOpen('Generar Ticket')}>Generar Ticket</Button>
          <Button variant="contained" size="small" color="info" sx={{ margin: '0 0 0 20px' }} endIcon={<SendIcon />} onClick={() => handleClickOpen('Enviar Notificacion')}>Enviar Notificacion</Button>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {drawerContent}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Card variant="outlined" sx={{ marginBottom: '15px' }}>
          <CardHeader
            avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
            title={<Typography variant="h5" component="div">Listado De Sesiones</Typography>}
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          />
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          <CardContent>
            <Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </Fragment>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader
            avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
            title={<Typography variant="h5" component="div">Listado De Pagos</Typography>}
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          />
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          <CardContent>
            <Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </Fragment>
          </CardContent>
        </Card>
      </Box>
    </Box>
    <StandarFormDialog open={open} handleClose={handleFormClose} title={formTitle}></StandarFormDialog>
  </>
}