/* eslint-disable no-unused-vars */

//hook
import React from 'react'

//component
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface DialogProps {
  title: string
  description: string
  open: boolean
  setOpen: (value: boolean) => void
}

const ConfirmDialog = (props: DialogProps) => {
  const { title, description, open, setOpen } = props

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancle</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default ConfirmDialog
