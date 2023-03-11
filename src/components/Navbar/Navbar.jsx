import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { useSelector } from 'react-redux'
import { CartContext } from '../../contexts/CartContext'
import { signOutUser } from '../../utils/firebase'
import './Navbar.css'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

function Navbar() {
  const user = useSelector((state) => state.user.user) // rootReducer.userReducer.userValue
  const { isCartOpen } = useContext(CartContext)

  return (
    <div className='navbar'>
      <Link to='/' className='navbar__logo-router-link'>
        <CrwnLogo />
      </Link>

      <div className='navbar__router-links-container'>
        <Link to='/shop' className='navbar__router-link'>
          Shop
        </Link>

        {user ? (
          <span className='navbar__router-link' onClick={signOutUser}>
            Sign out
          </span>
        ) : (
          <Link to='/auth' className='navbar__router-link'>
            Sign in
          </Link>
        )}

        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  )
}

export default Navbar
