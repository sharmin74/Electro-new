import React from 'react'
import './Products.css'
import p1 from './photos/Products/p1.JPG'
import p2 from './photos/Products/p2.JPG'
import p3 from './photos/Products/p3.JPG'
import p4 from './photos/Products/p4.JPG'
import p5 from './photos/Products/p5.JPG'
import p6 from './photos/Products/p6.JPG'
import p7 from './photos/Products/p7.JPG'
import p8 from './photos/Products/p8.JPG'
import p9 from './photos/Products/p9.JPG'
import Button from '@material-ui/core/Button';
import EachProduct from './EachProduct'
import { ListItem } from '@material-ui/core'

function Products() {
    return (
        <div className='products'>
            <h1>Our Products</h1>
            <EachProduct
                    src={p1}
                    name="Universal Digital Panel Meters"
                    description=" We make available a comprehensive range of Universal Digital Panel Meters. These meters are made using superior grade parts and components. The accurate data can be clearly seen on the LED display. Easy to install, maintain and use, our meters find extensive use in commercial applications."
                    subHeading="Features:"
                    line1="4-20mA input or 0-10Vdc input OR user specified input"
                    line2="On line 2 point calibration as per user’s requirement"
                    line3="High low alarm relay output and LED display"
                    line4="Compact size: DIN 48 x 96 x 120mm (H x L x D)"
                />
                  <EachProduct
                    src={p3}
                    name="Universal Timers"
                    description="We make available for our clients Universal Timers. The user-friendly and customized configurations help different users to use our timers. Accurate calculations and durable life span make these timers a perfect choice. Some of the other features of these timers are as follows:"
                    subHeading="Features:"
                    line1="User configurable from milliseconds to Hours"
                    line2="User configurable On Delay / Off delay timer"
                    line3="User configurable one shot / cyclic timer"
                    line4="User configurable Power On / Trigger start"
                />
            <EachProduct
                    src={p9}
                    name="Real Time Switches"
                    description="We offer Real Time Switches for commercial purposes. These Real Time Switches have excellent configuration and load bearing capacity. Moreover, these Real Time Switches exhibit excellent quality standards and provide a consistent performance. Some of the striking features of these Real Time Switches are as follows:"
                    subHeading="Features:"
                    line1="Weekly program"
                    line2="100 programmable switches per day"
                    line3="Programmable through PC software"
                    line4="Up to four loads per instrument"
                    line4="Up to four loads per instrument"
                />
        </div>
    )
}

export default Products
