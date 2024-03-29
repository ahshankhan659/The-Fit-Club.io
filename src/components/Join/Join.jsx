import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

function Join() {
    const form = useRef();
    return (
        <>
            <div className="join" id='join-us'>
                <div className="left-j">
                    <hr />
                    <div>
                        <span className='stroke-text'>READY TO</span>
                        <span>LEVEL UP</span>
                    </div>
                    <div>
                        <span>YOUR BODY</span>
                        <span className='stroke-text'>WITH US?</span>
                    </div>
                </div>
                <div className="right-j">
                    <form ref={form} className="form-conatiner">
                        <input type="email" name='user_email' placeholder='Enter Your Email Address' />
                        <button className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join