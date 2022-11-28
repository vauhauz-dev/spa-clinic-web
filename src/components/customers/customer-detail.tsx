import { AppBar, Toolbar, IconButton, Typography, Button, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Chip, Card, CardContent, CardHeader, Skeleton, Tab, Tabs, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const formatCurrency = require('format-currency')
import SendIcon from '@mui/icons-material/Send';
import StandarFormDialog from "../common/standar-form-dialog";
import { Fragment, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const drawerWidth = 240;

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  handleClose: any;
  customer: any;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const handleOpenDial = () => setOpenSpeedDial(true);
  const handleCloseDial = () => setOpenSpeedDial(false);

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
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
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
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button variant="contained" size="small" color="info" sx={{ margin: '0 0 0 20px' }} onClick={() => handleClickOpen('Generar Cita')}>Generar Cita</Button>
            <Button variant="contained" size="small" color="info" sx={{ margin: '0 0 0 20px' }} onClick={() => handleClickOpen('Agregar Tratamiento')}>Agregar Tratamiento</Button>
            <Button variant="contained" size="small" color="info" sx={{ margin: '0 0 0 20px' }} onClick={() => handleClickOpen('Generar Ticket')}>Generar Ticket</Button>
            <Button variant="contained" size="small" color="info" sx={{ margin: '0 20px 0 20px' }} endIcon={<SendIcon />} onClick={() => handleClickOpen('Enviar Notificacion')}>Enviar Notificacion</Button>
          </Box>
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
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
              <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          zIndex: 9999999,
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
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Listado De Sesiones" {...a11yProps(0)} />
              <Tab label="Listado De Pagos" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
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
          </TabPanel>
          <TabPanel value={value} index={1}>
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
          </TabPanel>
        </Box>
      </Box>
    </Box>
    <StandarFormDialog open={open} handleClose={handleFormClose} title={formTitle}></StandarFormDialog>
    <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16, display: { sx: 'block', sm: 'none' } }}
        icon={<SpeedDialIcon />}
        onClose={handleCloseDial}
        onOpen={handleOpenDial}
        open={openSpeedDial}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
  </>
}