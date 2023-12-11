import React, { useState } from 'react'
import './Log.css'
import Nav from '../Navbar/Nav'
import { Link } from 'react-router-dom'

function Log() {
    const [log,setLog]=useState({
        mobile:"",password:""
    })
    const hch=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
    }
    const chgFn=(e)=>{
      // e.preventDefault()
     
       
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
                    
                    <h1>Login</h1>
                  </div>
                  <form onSubmit={chgFn} className='acc-form'>
                  <div className="accinput">
                    <input type="text" class="form-control" placeholder='Mobile number' required name='mobile' value={log.mobile} onChange={hch} />
                  </div>
                  <div className="accinput">
                    <input type="text" class="form-control" placeholder='passsword' required name='password' value={log.password} onChange={hch} />
                  </div>

                  <div className="sucss-btn">
                    <button type="submit" class="btn btn-success   ">Sign Up</button>
                  </div>
                  </form>
                  <Link to="/account">
                 <p className='sigin-p'>New user? <a className="sigin" to="" >Sign in</a> </p>
                 </Link>
                </div>
              </div>
            </div>
          </div>





        </div>



     

    </div>
  </div>
  )
}

export default Log
