import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './HamburgerButton.css'

function HamburgerButton(props) {
    return (
        <div className='hamburgerButton' >
            <MenuIcon style={{fontSize: "40px"}} onClick={props.click}   />       
        </div>
    )
}

export default HamburgerButton;
