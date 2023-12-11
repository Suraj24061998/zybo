import React from 'react'
import './Footer.css'

function Footer() {
  return (
   
       
       <footer>
          <div className="container">
              <div className="row">
                   <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="footer-img">
                                
                            </div>
                   </div>
                   <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <ul className="ul-box">
                        <li>
                            <p >Help</p>
                        </li>
                        <li>
                            <p >Contact Us</p>
                        </li>
                        <li>
                            <p >Privacy & Terms</p>
                        </li>
                    </ul>
                    
                   </div>
                   <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                   <ul className="ul-social">
                        <li>
                        <i class="bi bi-facebook"></i>
                        </li>
                        <li>
                        <i class="bi bi-twitter"></i>
                        </li>
                        <li>
                        <i class="bi bi-instagram"></i>
                        </li>
                    </ul>
                   </div>
              </div>
          </div>
       </footer>
   
  )
}

export default Footer
