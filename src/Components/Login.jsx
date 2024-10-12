import React from 'react'
import '../styles/login.css'
import CommonBtn from './CommonBtn'

export default function Login() {
  return (
    <div className='comnMainWrapper'>
        <main className="ComNWholePar">
            <h1 className="brandName">SparkEd</h1>
            <div className="mainLginDtls">
                <h3 className="loginHdng">Login</h3>
                <p className="LoginPara">Enter your Email and Password</p>
                <div className="loginDtls_mn">
                    <div className="inpPar">
                        <input className="commonInp" type="text" placeholder="username" />
                    </div>
                    <div className="inpPar">
                        <input className="commonInp" type="password" placeholder="password" />
                    </div>
                </div>  
            </div>
            <CommonBtn title="Login" />
        </main>
    </div>
  )
}
