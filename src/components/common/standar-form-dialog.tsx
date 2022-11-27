import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Card, Skeleton, CardHeader, CardContent } from "@mui/material";
import { Fragment } from "react";

export default function StandarFormDialog(props: any) {
    return <>
        <Dialog fullWidth={true}
        maxWidth={'sm'} open={props.open} onClose={props.handleClose}>
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
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
      <Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </Fragment>
      </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
}