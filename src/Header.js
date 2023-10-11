import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header__logo'
                    src='https://www.carlogos.org/car-logos/lamborghini-logo-1963-full-download.png'
                    alt='company Logo'
                />
            </Link>


            <div
                className='header__navigation'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication}
                        className='header__option'>
                        <span className='header__optionLineOne'>
                            {user ? user.email : 'hello'}

                        </span>
                        <span className='header__optionLineTwo'>
                            {user ? 'Sign out' : 'Sign in'}

                        </span>

                    </div>
                </Link>
                <div
                    className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns

                    </span>
                    <span className='header__optionLineTwo'>
                        Orders

                    </span>


                </div>
                <div
                    className='header__option'>
                    <span className='header__optionLineOne'>
                        Your

                    </span>
                    <span className='header__optionLineTwo'>
                        Prime

                    </span>


                </div>
                <Link to="/checkout">
                    <div
                        className='header__optionBasket'>
                        <ShoppingCartIcon />
                        <span className='header__optionLineTwo header__basketcount'>{basket?.length}</span>

                    </div>
                </Link>

            </div>


        </div>
    )
}

export default Header
