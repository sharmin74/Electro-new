import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './HamburgerButton.css'

function HamburgerButton(props) {
    const [btnColour, setbtnColour] = useState(false);
    function changebtnColour(){
        if(window.scrollY >= 100){
            setbtnColour(true)
        }   else{
            setbtnColour(false)
        }
    }
    window.addEventListener('scroll', changebtnColour)
    return (
        <div className={btnColour ? 'changeColour' : ' hamburgerButton'} >
            <MenuIcon style={{fontSize: "40px"}} onClick={props.click}   />       
        </div>
    )
}

export default HamburgerButton;
