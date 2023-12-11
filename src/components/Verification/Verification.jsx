import React from 'react'
import './Verification.css'
import Nav from '../Navbar/Nav'

function Verification() {
  return (
    <div>
      <div className="verify-img">
        <Nav />
        <div class="container">
          <div className="verify-all">
            <p className="text-first">
              Verification
            </p>
            <p className="text-second">
              Enter the code we sent through your phone number
            </p>
            <div className="text">
              <input type="text" className='verifitext' />
              <input type="text" className='verifitext' />
              <input type="text" className='verifitext' />
              <input type="text" className='verifitext' />

            </div>


            <p className='text-3'> Didn’t Received the code <a className="recent" to="" > Resent </a> </p>

            <div className="sucss-btn">
              <button type="submit" class="btn btn-success   ">Sign Up</button>
            </div>



          </div>
        </div>
      </div>

    </div>

  )
}

export default Verification
