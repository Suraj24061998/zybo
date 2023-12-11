import React, { useState } from 'react'
import {Link}from 'react-router-dom'
import "./Account.css"
import Nav from '../Navbar/Nav'

function Account() {
  const [account, newAccount] = useState({
    name: "",
    mobile: "",
    password: ""
  })
  const hch = (e) => {
    newAccount({ ...account, [e.target.name]: e.target.value })
  }
  const chFn = (e) => {
    // e.preventDefault();
   
  }
  return (
    <div>
      <div className="accounthead">
        <Nav/>
       


          <div className="accounttext">

            <div className="container ">
              <div className="row">
                <div className="col-6">
                  <div className="accstyle">

                    <div className="acctext">
                      
                      <h1>Create Account</h1>
                    </div>
                    <form onSubmit={chFn} className='acc-form'>
                    <div className="accinput">
                      <input type="text" class="form-control" placeholder='Name' required name='name' value={account.name} onChange={hch} />
                    </div>
                    <div className="accinput">
                      <input type="text" class="form-control" placeholder='Mobile number' required name='mobile' value={account.mobile} onChange={hch} />
                    </div>
                    <div className="accinput">
                      <input type="text" class="form-control" placeholder='passsword' required name='password' value={account.password} onChange={hch} />
                    </div>

                    <div className="sucss-btn">
                      <button type="submit" class="btn btn-success   ">
                         Sign Up
                       
                        </button>
                    </div>
                    </form>
                   <p className='sigin-p'>Already have an account?  <Link to="/log"><a className="sigin" to="" > Sign in</a></Link> </p>
                   <Link to="/log" className='sigin-p'></Link>
                  </div>
                </div>
              </div>
            </div>





          </div>



       

      </div>
    </div>
  )
}

export default Account
