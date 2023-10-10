import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

const Popup = ({ open, onClose, content }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Texto de Ejemplo</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          {content}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;