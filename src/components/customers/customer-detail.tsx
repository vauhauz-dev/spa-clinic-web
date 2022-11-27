import { AppBar, Toolbar, IconButton, Typography, Button, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Chip, Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const formatCurrency = require('format-currency')
import SendIcon from '@mui/icons-material/Send';
import StandarFormDialog from "../common/standar-form-dialog";
import { Fragment, useState } from "react";

const drawerWidth = 240;

export default function CustomerDetails(props: any) {
    const {handleClose, customer} = props;
    const [formTitle, setFormTitle] = useState('')

    let opts = { format: '%s%v %c', code: 'USD', symbol: '$' }

    const [open, setOpen] = useState(false);

    const handleClickOpen = (title: string) => {
      setOpen(true);
      setFormTitle(title)
    };

    const handleFormClose = () => {
      setOpen(false);
    };

    return <>
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
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
              Cliente: {customer?.name ?? ''}
            </Typography>
            <Button variant="contained" size="small" color="info" sx={{margin: '0 0 0 20px'}}  onClick={() => handleClickOpen('Generar Cita')}>Generar Cita</Button>
            <Button variant="contained" size="small" color="info" sx={{margin: '0 0 0 20px'}}  onClick={() => handleClickOpen('Agregar Tratamiento')}>Agregar Tratamiento</Button>
            <Button variant="contained" size="small" color="info" sx={{margin: '0 0 0 20px'}}  onClick={() => handleClickOpen('Generar Ticket')}>Generar Ticket</Button>
            <Button variant="contained" size="small" color="info" sx={{margin: '0 0 0 20px'}} endIcon={<SendIcon />}  onClick={() => handleClickOpen('Enviar Notificacion')}>Enviar Notificacion</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
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
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Card variant="outlined">
          <CardHeader
            avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
            title={<Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
            }
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
            title={<Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
            }
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