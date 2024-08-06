import { Avatar } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import React from 'react'

const UserDetails = () => {
  return (
    <>
    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </>
  )
}

export default UserDetails