import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {deletePropertyDetailById} from '../../Apis/AddPropertyApiList';

export function AlertDialog(props:any) {
    const {id,handleCloseModal} = props;
    console.log('handleCloseModal',handleCloseModal)

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const deleteResponse = await deletePropertyDetailById({id:id});
    if(deleteResponse.success === true) {
        setOpen(false);
        handleCloseModal();
        window.location.reload();
    } else {
        setOpen(false);
        handleCloseModal();
    }
    console.log('deleteResponse',deleteResponse)
  }

  return (
    <React.Fragment>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Property"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are You sure You want to delete this Property ! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}