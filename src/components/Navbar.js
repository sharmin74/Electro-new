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
    // const [navColour, setNavColour] = useState(false);
    // function changeColour() {
    //     if(window.location.pathname !== '/'){
    //       setNavColour(true);
    //       console.log('transparent');
    //     } else{
    //       setNavColour(false);
    //       console.log('white');
    //     }
    //   }
    //   let color = changeColour;
    //   console.log(color);
      // let classes;
      // if(navbar && color === 'whiteColour'){
      //       return classes = 'navbar navbar__small active'
      // }
    return (
        <div className={ navbar ? 'navbar navbar__small active' : 'navbar navbar__small' }>
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
