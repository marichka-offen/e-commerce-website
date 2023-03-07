import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__logo-router-link'>
        <CrwnLogo />
      </Link>

      <div className='navbar__router-links-container'>
        <Link to='/shop' className='navbar__router-link'>
          Shop
        </Link>
        <Link to='/sign-in' className='navbar__router-link'>
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default Navbar
