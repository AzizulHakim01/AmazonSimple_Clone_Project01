import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {useStateValue} from './StateProvider';


const Header = () => {
  const [{basket}, dispatch] = useStateValue()
  const navigate = useNavigate()
  return (
    <div className='header'>
        <div className="header__logo" onClick={()=>{navigate('/')}}>
              <StorefrontIcon className='header__logoImage' fontSize='large'/>
              <h2 className="header__logoTitle">hakimShop</h2>
            </div>
            <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo" onClick={()=>navigate('/login')}>Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <div className="nav__itemBasket" onClick={()=>navigate('/checkout')}>
                   <ShoppingBasketIcon/>
                    <span className="nav__basketCount">{basket.length}</span>
                </div>
            </div>
    </div>
  )
}

export default Header