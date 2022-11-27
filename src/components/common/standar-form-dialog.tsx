import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Card, Skeleton, CardHeader } from "@mui/material";

export default function StandarFormDialog(props: any) {
    return <>
        <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Card>
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
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
}