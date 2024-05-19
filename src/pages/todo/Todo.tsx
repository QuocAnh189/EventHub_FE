//hook
import { useState } from 'react'

//component
import { PageHeader } from '@layouts/components'
import Spring from '@components/Spring'
import ColumnTodo from '@components/ColumnTodo'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

//icon
import { MdOutlineNoteAdd } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import ProtectedLayout from '@layouts/protected'

const Todo = () => {
  const [openNewColumnForm, setOpenNewColumnForm] = useState<boolean>(false)
  const [newColumnTitle, setNewColumnTitle] = useState<string>()
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const handleAddNewColumn = async () => {}

  return (
    <ProtectedLayout>
      <PageHeader title='Todo' />
      <Spring>
        <Box className='flex w-full h-screen overflow-y-hidden overflow-x-auto bg-body'>
          <Box
            className='flex w-full h-full overflow-y-hidden overflow-x-auto bg-inherit'
            sx={{ '&::-webkit-scroll-track': { m: 2 } }}
          >
            {[1, 2, 3].map(() => (
              <ColumnTodo />
            ))}
            {!openNewColumnForm ? (
              <Box
                onClick={toggleOpenNewColumnForm}
                sx={{
                  minWidth: '250px',
                  maxWidth: '250px',
                  mx: 2,
                  borderRadius: '6px',
                  height: 'fit-content'
                  // backgroundColor: '#ffffff3d'
                }}
              >
                <Button
                  startIcon={<MdOutlineNoteAdd />}
                  sx={{
                    backgroundColor: '#ebecf0',
                    color: 'black',
                    width: '100%',
                    justifyContent: 'flex-start',
                    pl: 2.5,
                    py: 1
                  }}
                >
                  Add new column
                </Button>
              </Box>
            ) : (
              <Box>
                <Box
                  sx={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    mx: 2,
                    p: 1,
                    borderRadius: '6px',
                    height: 'fit-content',
                    backgroundColor: '#ffffff3d'
                  }}
                >
                  <TextField
                    label='Enter column title...'
                    type='text'
                    size='small'
                    variant='outlined'
                    autoFocus
                    value={newColumnTitle}
                    onChange={(e: any) => {
                      setNewColumnTitle(e.target.value)
                    }}
                    sx={{
                      '& label': { color: '#3D56F0' },
                      '& input': { color: '#3D56F0' },
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
                      }
                    }}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
                    <Button
                      onClick={handleAddNewColumn}
                      disabled={false}
                      variant='contained'
                      color='success'
                      size='small'
                      sx={{
                        boxShadow: 'none',
                        border: '0.5px solid',
                        backgroundColor: '#3D56F0',
                        '&:hover': { backgroundColor: '#6366f1' }
                      }}
                    >
                      Add Column
                    </Button>
                    <IoMdClose size={16} onClick={toggleOpenNewColumnForm} color='black' className='cursor-pointer' />
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Spring>
    </ProtectedLayout>
  )
}

export default Todo
