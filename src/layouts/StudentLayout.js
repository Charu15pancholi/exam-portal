import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function StudentLayout() {
  return (
    <Grid container>
        <Grid item xs={12}>
            {/* <Menu /> */}
        </Grid>
        <Grid item xs={12}>
            <Outlet />
        </Grid>
    </Grid>
  )
}

export default StudentLayout