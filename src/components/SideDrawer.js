import React from 'react'
import { Link } from 'react-router-dom';
import './SideDrawer.css';

function SideDrawer(props) {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <div className={drawerClasses}>
            <ul>
                <Link  className='navbar__eachItem' to='/' onClick={props.click}>
                    <li>Home</li>
                </Link>
                <Link  className='navbar__eachItem' to='/about' onClick={props.click}>
                    <li>About Us</li>
                </Link>
                <Link  className='navbar__eachItem' to='/products' onClick={props.click}>
                    <li>Our Products</li>
                </Link>
                <Link  className='navbar__eachItem' to='/contact-us' onClick={props.click}>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}

export default SideDrawer
