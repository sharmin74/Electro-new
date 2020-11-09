import React from 'react'
import './Products.css'
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ListItems from './ListItems';
// import { Carousel } from 'react-responsive-carousel';


function EachProduct(props) {
    return (
        <div className='products__row'>
        <div>
          <img className='products__img' src={props.src} alt="img"/>
        </div>
        <div className='data'>
            <h2>{props.name}</h2>
            <p>
                {props.description}                
            <br/>
            <b>{props.subHeading}</b> 
            <ListItems line={props.line1} />
            <ListItems line={props.line2} />
            <ListItems line={props.line3} />
            <ListItems line={props.line4} />
            </p>
            <a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=919717389303" target="false">
            <button className="products__btn">
            Ask on WhatsApp  <WhatsAppIcon className='whatsApp__icon' />
        </button>
        </a>
        </div>
    </div>
    )
}

export default EachProduct
