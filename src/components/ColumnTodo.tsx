//hook
import { useState } from 'react'

//component
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import { CardItem } from './CardTodo'

//icon
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import CloseIcon from '@mui/icons-material/Close'

export const ColumnTodo = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [openNewCardForm, setOpenNewCardForm] = useState<boolean>(false)
  const [newCardTitle, setNewCardTitle] = useState<string>()
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const handleDeleteColumn = async () => {}

  const handleAddNewCard = async () => {}

  // const handleDeleteColumnDetail = async () => {}
  return (
    <Box
      // {...listeners}
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        backgroundColor: '#ebecf0',
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content'
      }}
    >
      <Box
        sx={{
          height: '50px',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h6' sx={{ fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', color: '#3D56F0' }}>
          Column1
        </Typography>
        <Box>
          <Tooltip title='More option'>
            <ExpandMoreIcon
              sx={{ color: 'text.primary', cursor: 'pointer' }}
              id='basic-column-dropdown'
              aria-controls={open ? 'basic-menu-workspaces' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>

          <Menu
            id='basic-menu-column-dropdown'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem
              onClick={toggleOpenNewCardForm}
              sx={{ '&:hover': { color: 'warning.dark', '& .delete-card-icon': { color: 'warning.dark' } } }}
            >
              <ListItemIcon>
                <AddCardIcon className='delete-card-icon' fontSize='small' />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize='small' />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize='small' />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize='small' />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>

            <Divider />
            <MenuItem
              onClick={handleDeleteColumn}
              disabled={false}
              sx={{ '&:hover': { color: 'warning.dark', '& .delete-forerver-icon': { color: 'warning.dark' } } }}
            >
              <ListItemIcon>
                <DeleteIcon className='delete-forerver-icon' fontSize='small' />
              </ListItemIcon>
              <ListItemText>Delete this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize='small' />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box
        sx={{
          p: '0 5px 5px 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overFlowY: 'auto'
        }}
      >
        {[0, 1, 3, 4].map((card: any) => (
          <CardItem key={card._id} />
        ))}
      </Box>

      <Box
        sx={{
          height: '56px',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {!openNewCardForm ? (
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button onClick={toggleOpenNewCardForm} startIcon={<AddCardIcon />} sx={{ color: '#3D56F0' }}>
              Add new card
            </Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} className='text-primary' />
            </Tooltip>
          </Box>
        ) : (
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center ', gap: 1 }}>
            <TextField
              label='Enter card title...'
              type='text'
              size='small'
              variant='outlined'
              autoFocus
              value={newCardTitle}
              onChange={(e: any) => {
                setNewCardTitle(e.target.value)
              }}
              sx={{
                '& label': { color: '#3D56F0' },
                '& input': {
                  color: '#3D56F0',
                  backgroundColor: '#333643'
                },
                '& label.Mui-focused': { color: '#3D56F0' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#3D56F0'
                  },
                  '&:hover fieldset': {
                    borderColor: '#3D56F0'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3D56F0'
                  }
                },
                '& .MuiOutlinedInput-input': {
                  borderRadius: 1
                }
              }}
            />
            <div className='flex items-center gap-1'>
              <Button
                disabled={false}
                onClick={handleAddNewCard}
                size='small'
                color='primary'
                variant='contained'
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid'
                }}
                className='bg-primary'
              >
                Add
              </Button>
              <CloseIcon fontSize='small' className='cursor-pointer text-primary' onClick={toggleOpenNewCardForm} />
            </div>
          </Box>
        )}
      </Box>
    </Box>
  )
}
