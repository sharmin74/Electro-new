import { Link } from 'react-router-dom';
import React from 'react'
import './About.css'



function About() {
    return <div id='about'>
        <div className='about'>
            <div className='about__data'>
                <h1>About Us</h1> 
                

                <div className='profile__picture'>
                    <img src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></img>
                </div>
                <div className='about__company'>
                    <p>
                        Volt Amp Logic Controls
                        Established in the year 2000, ‘Volt-Amp Logic Controls’ is a trusted business entity engaged in manufacturing and supplying Electronic Instruments. Our products have been accredited by the domain veterans for the exceptional life span and cost-effectiveness. As a sole proprietorship firm, we adhere to honest and direct business principles while making deals with our customers.
                        We boost of having an advance infrastructure which enables us to accomplish all processes efficiently. The quality standards offered by us have helped us attain the long-term trust of our customers. We are capable of meeting urgent orders and hence assist our clients in meeting their business requirements. Versatility we exhibit in terms of payment and shipment modes is much-admired by our clients.
                        The proprietor of our organization <b>‘Mr. Ernest Lobo’</b> has efficaciously handled the managerial activities. His visionary skills and creative mind have been the secret behind our speedy success in the industry.   
                    </p>
                </div>
                




                <div className='about__team'>
                    <h3>Our Team</h3>
                    <img className='aboutteam__img' src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
                    <div className="about__teamcontent"> 
                        <br />
                        <p>We are particular about the professionals we hire and ensure that allocation of each is done as per talent & expertise. The professionals in our respective departments come from different areas of specialization. They have in-depth understanding of the domain intricacies and apply the same while executing complex orders.</p>
                    </div>

                    {/* <h4>Main professionals actively involved in our processes are as follows:</h4>
                    <p className='team__emp'> Engineers <br/>
                        Technicians <br/>
                        Quality analysts <br/>
                        Researchers <br/>
                        Sales & Marketing personnel <br/>
                        Client servicing personnel</p> */}
                </div>






                <div className='about__productlist'>
                    <img src='https://t4.ftcdn.net/jpg/02/20/78/61/240_F_220786142_sTM5ZCbEsFILI9nBhJzPt4R4QYRvhEmQ.jpg'></img>
                    <h2>List of products we offer</h2>
                    <p>
                        <ul>
                            <li>Full Automatic Autoclave Controllers Cum Data Logger </li>
                            <li>Process Controllers cum Data Loggers</li>
                            <li>Multi Point Data Loggers</li>
                            <li>Chartless Recorder Software</li>
                            <li>Universal Digital Panel Meter</li>
                            <li>Real Time Switches</li>
                            <li>Presettable Counter </li>
                            <li>RPM Indicators</li>
                            <li>Universal Timers</li>
                        </ul>
                    </p>
                </div>



                <div className='about__productfeatures'>
                    <img src='https://t3.ftcdn.net/jpg/02/87/97/90/240_F_287979035_hWMKC46PUC78VxmhELzeRioL8vFoy2kV.jpg'></img>
                    <h2>Feature</h2>
                    <p>       
                        <ul>
                            <li>Peak performance</li>
                            <li>Low consumption of energy</li>
                            <li>Less maintenance</li>
                            <li>Reliable operations</li>
                            <li>User-friendly interface </li>
                        </ul> 
                    </p>
                </div>




                <div className='about__strengths'>
                    <h3>Our Strengths</h3>
                    <p className='strenght__data'>We believe that our growth is the reciprocal of customer’s growth. Hence, we have created a mutual environment where our clients and we can together grow. We work on our loopholes to avoid any kind of quality dip. Certain reasons owing to which we are thriving in the domain are as follows:</p>
                    <div className='strenght__right'>
                        {/* <img className='strenght__img' src='https://t4.ftcdn.net/jpg/02/16/25/13/240_F_216251374_UXDyN7OxLrhpWuWsfy4Wfy4Vkxu8VZiq.jpg' /> */}
                        <div className='strenght__list'>
                        <p>
                            <ul>
                                <li>Modern infrastructure setup with scope for expansion </li>
                                <li>High quality products</li>
                                <li>Qualified team of professionals</li>
                                <li>Customized solutions</li>
                                <li>Enormous production capacity</li>
                                <li>Timely delivery</li>
                                <li>Fair deals</li>
                                <li>Competitive pricing</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>



                
            </div>
        </div>


        <div className='contact__field'>
            <h2>How Can We Help ?</h2>
            <p>If you have any questions or queries we will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</p>
            <Link to='/contact-us'>
              <button>CONTACT US</button>
            </Link>
            <Link to='/products'>
              <button>OUR PRODUCTS</button>
            </Link>
        </div>
    </div>
}

export default About;