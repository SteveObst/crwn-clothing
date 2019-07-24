import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';


const Header = ({currentUser}) => (
   
    <div className='header'>
        <div className='left-side'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            {
                currentUser ? <div className='welcome'>{currentUser.displayName.toUpperCase()} is shopping...</div> : ''
            }   
        </div>

        <div className='options'>  
            
            <Link className='option' to="/shop">
                SHOP
            </Link>
            
            <Link className='option' to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>
            }

    
        </div>
       
    </div>

)

export default Header;