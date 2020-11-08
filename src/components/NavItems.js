import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function NavItems(props) {

    // changeTitle = () => {
    //     switch(window.location.pathname){
    //       case '/about':
    //         return 'Profile';
    //       case '/products':
    //         return 'Admin';
    //       case '/contact-us':
    //         return 'Admin';
    //       default:
    //         return 'Dashboard';
    //     }
    //   }
    //   render(){
    //    let title = changeTitle();
    //     return(<div>{title}</div>)
    //   } 





    let className = 'navbar__eachItem'
    if(props.scroll){
        className = 'navbar__itemsActive'
    }
    return (
            <div className='navbar__items' >
                <ul>
                    <Link  className={className} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link  className={className} to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link  className={className} to='/products'>
                        <li>Our Products</li>
                    </Link>
                    <Link  className={className} to='/contact-us'>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </div> 
    )
}

export default NavItems
