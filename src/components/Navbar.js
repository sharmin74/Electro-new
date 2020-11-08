import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import './Navbar.css'
import logo from './photos/logo1.jpg'
import HamburgerButton from './HamburgerButton';
import NavItems from './NavItems';

function Navbar(props) {
    // TO CHANGE THE STATE OF NAVBAR WHEN SCROLLING 
    const [navbar, setNavbar] = useState(false);
    function changeBg(){
        if(window.scrollY >= 100){
            setNavbar(true)
        }   else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBg)
    function changeClass() {
        switch(window.location.pathname){
          case '/about':
            return 'linkColour';
          case '/products':
            return 'linkColour';
          case '/contact-us':
            return 'linkColour';
          default:
            return 'whiteColour';
        }
      }
      let color = changeClass();
      let className;
      if(navbar && color === '/'){
            return className = 'navbar navbar__small active'
      }
    return (
        <div className={navbar ? 'navbar navbar__small active' : 'navbar navbar__small'}>
            <Link  className='navbar__eachItem' to='/'>
                <div className='navbar__logo'>
                    <img src={logo} alt="logo"/>
                </div>
            </Link>
            <NavItems scroll={navbar} />
            <HamburgerButton click={props.click} />
            
        </div>
    )
}

export default Navbar
