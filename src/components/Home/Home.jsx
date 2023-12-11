import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import navimg from "../Image/nav.png"
import Slider from '../Slider/Slider'
import img from '../Image/center.png'
import Center from '../Center/Center'
import img2 from '../Image/center5.png'
import Footer from '../Footer/Footer'
import center from '../Image/center-4.png'
import center1 from '../Image/center2.png'
import center2 from '../Image/center3.png'
import pro from '../Image/profile.png'
import harve from '../Image/harve.png'
import catagory1 from '../Image/catagory1.png'
import catagory2 from '../Image/catagory2.png'
import catagory3 from '../Image/catagory3.png'







function Home() {
    return (
        <div className="div">
            <div className='home-img'>
                <div className="navbar navbar-expand-lg fixed-top">
                    <div className="container nav-nav">
                        <div className="img">
                            <img src={navimg} className="nav-img" />
                        </div>
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to="/About" className="nav-link">About us</Link></li>
                                <li className="nav-item"><Link to="/Services" className="nav-link">Services</Link></li>
                                <li className="nav-item"><Link to="/Shop" className="nav-link">Shop</Link></li>
                                <li className="nav-item" ><Link to="/Contact" className="nav-link">Contact us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/" className="nav-link"><i className="bi bi-search"></i></Link></li>
                                <li className="nav-item"><Link to="/account" className="nav-link"><i className="bi bi-person-circle"></i></Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link"><i className="bi bi-cart"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="home-text">
                    <h4 className="home-p">Now,anyone can farm</h4>
                    <h4 className="home-p"><b>Easy Plant Kits for everyone</b></h4>
                    <button className="end-btn"> Shop Now <i class="bi bi-arrow-right"></i></button>
                </div>

            </div>
            <div className="slider1">
                <Slider />
            </div>
            <div className="card-center">
                <div className="card1">
                    <p className="card-text-1">

                        The world's <br />
                        1st subscription based <br />
                        Indoor Plant Company
                    </p>
                    <p className="card-text-2">
                        The world’s first subscription based Indoor
                        Plant Company – Harvestay is revolutionising
                        the way people buy and care for their plants. With this innovative model, customers can subscribe to a monthly delivery of a curated selection of healthy and vibrant plants that
                    </p>
                </div>
                <div className="card-img">
                    <img src={img} className='card-img-1' />

                </div>

            </div>
            <div className="center-card-2">
                <p className="card-text-card-2">  Our Services </p>

            </div>
            <div className="center-2">
                <Center />
            </div>

            <div className="center-3">
                <div className="center3-text-p1">
                    <p className="center-3-text">400+ <p className="center-3-text1">PRODUCTS</p></p>
                    <p className="center-3-text">1100+<p className="center-3-text1">ORDERS </p></p>
                    <p className="center-3-text">1250+<p className="center-3-text1">PLANT TYPES </p></p>
                </div>
                <div className="center3-img">
                    <img src={img2} className='center-img' />
                </div>
                <div className="center3-text-p2">
                    <p className="center-3-text">350+ <p className="center-3-text1">PRODUCTS DONE</p></p>
                    <p className="center-3-text"> 400+<p className="center-3-text1">HAPPY CLIENTS </p></p>
                    <p className="center-3-text">1250+<p className="center-3-text1">PLANT TYPES </p></p>
                </div>

            </div>
            <div className="center-4-img">
                <div className="text-center">
                    <p className="center-4-text-p">
                        Testimonials <br />
                        <p className="text-p2"> A testimonial is an honest endorsement of your product or service that usually comes from
                            a customer,colleague,or peer who has benefited from or experienced suess as a result of the work you did for them</p>
                    </p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <div className="center-profile-div">
                    <img src={pro} className='center-profile' />
                    <p className='profile-name'>luis lara</p>
                </div>
                <img src={center} className='pricture' />

            </div>
            <div className="center-5">
                <div className="center-p">
                    <p className="center-5-text">

                        Discover the convenience of online shopping &
                        the opportunity of franchise ownership <br />

                        <button className="bt-c-5"> Enquire Now <></></button>
                    </p>
                </div>
                <img src={harve} className='harve-img' />
            </div>
            <div className="center-6-catagery">
                <p className="catagery-text">
                categories
                </p>
             <div className="catagory-img">
                <img src={catagory1} alt=""  className='card-img'/>
                <p className="catagory-text-1">Plants</p>
                </div> 

                <div className="catagory-img">
                <img src={catagory2} alt=""  className='card-img'/>
                <p className="catagory-text-1">Plants</p>
                </div> 
                <div className="catagory-img">
                <img src={catagory3} alt=""  className='card-img'/>
                <p className="catagory-text-1">Plants</p>
                </div> 
            </div>
        </div>









    )
}

export default Home
