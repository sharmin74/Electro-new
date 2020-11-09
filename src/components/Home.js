import React from 'react';
import './Home.css';
import product1 from './photos/Products/p1.JPG';
import product2 from './photos/Products/p5.JPG';
import product3 from './photos/Products/p3.JPG';
import product4 from './photos/Products/p9.JPG';
import Particles from "react-tsparticles";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Home() {
    return <div id='home'>
        <div className='home'>
            
        <Particles
        className="particles__bg"
        height="800px"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#00a8cc",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
        <div class="home__heading">
            <h1>Established in the year 2000, ‘Volt-Amp Logic Controls’ is a trusted business entity engaged in manufacturing and supplying Electronic Instruments.</h1>
            <Link to='/contact-us'>
              <button className='home__whitebtn'>CONTACT US</button>
            </Link>
        </div>


    



            <div className='home__datacontainer'>
                <div className='home__data'>
                    <div className='home__team'>
                        <h2>Volt-Amp Logic Controls</h2>
                        <p>We are a reputed manufacturer and supplier of Process Control Electronic Instruments. High quality components and parts are used for manufacturing these instruments. Our instruments are completely digitalized and are mostly automatic. The instruments we offer are available in standard specifications at prices that are easy on the pocket.</p>
                        <Link to='/about' className='home__btn' >
                            <button>ABOUT US</button>        
                         </Link>
                    </div>
                </div>
            </div>






        <div className='homeproduct__headline'>
            <div className='home__data'>
                <h2>Our Products</h2>
                <p>Volt Amp Logic Controls Established in the year 2000, ‘Volt-Amp Logic Controls’ is a trusted business entity engaged in manufacturing and supplying Electronic Instruments. Our products have been accredited by the domain veterans for the exceptional life span and cost-effectiveness. As a sole proprietorship firm, we adhere to honest and direct business principles while making deals with our customers. We boost of having an advance infrastructure which enables us to accomplish all processes efficiently. The quality standards offered by us have</p>
                <Link to='/products' className='home__btn' >
                    <button>EXPLORE OUR PRODUCTS</button>        
                </Link>
            </div>
        </div>
        <div className='home__data'>
            <div className='home__prodContainer'>
                <div className='home__product'>
                    <img src={product1} alt=''/>
                    <p>Universal Digital Panel Meters</p>            
                </div>
                <div className='home__product'>
                    <img src={product2} alt=''/>
                    <p>Electronic Timers</p>
                </div>
                <div className='home__product'>
                    <img src={product3} alt=''/>
                    <p>Universal Timers</p>
                </div>
                <div className='home__product'>
                    <img src={product4} alt=''/>
                    <p>Real Time Switches</p>
                </div>
            </div>
        </div>
            

            


        </div>
    </div>
}

export default Home;