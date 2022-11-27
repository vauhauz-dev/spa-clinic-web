import { AppBar, Toolbar, IconButton, Typography, Button, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const formatCurrency = require('format-currency')

const drawerWidth = 240;

export default function CustomerDetails(props: any) {
    const {handleClose, customer} = props;

    let opts = { format: '%s%v %c', code: 'USD', symbol: '$' }

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
            <Button variant="contained">Generar cita</Button>
            <Button variant="contained">Agregar tratamiento</Button>
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
        </>
}