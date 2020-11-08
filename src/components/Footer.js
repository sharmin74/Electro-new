import React from 'react'
// import {Link} from 'react-router-dom';
import './Footer.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='footer__icons'>
                <a href="">
                    <WhatsAppIcon style={{color: "#333333"}} />
                </a>
            </div>
            <p>Copyright {date}. <a style={{color: "white"}} href='/'>Volt-Amp Logic Controls</a></p>
        </div>
    )
}

export default Footer
