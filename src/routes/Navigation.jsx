import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar'

function Navigation() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  )
}

export default Navigation
