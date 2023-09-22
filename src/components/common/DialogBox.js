import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DialogBox = (props) => {
  const apiUrl = "http://localhost:8080/api/v1/delete";
  let navigate = useNavigate();
  // Somewhere in your code, e.g. inside a handler:
    let id = props.id;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const deletUser = () =>{
      axios.delete(apiUrl.concat('/') + props.id).then((res)=>{
        console.log(res);
        navigate("/create-user"); 
      }).catch((err) =>{
        console.log(err)
      })
      setOpen(false);
    }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>Are you sure you want to delete?"<b>{props.name}"</b></p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={deletUser}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default  DialogBox

