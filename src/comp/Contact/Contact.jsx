import React, { useState } from 'react'
import "../Contact/Contact.css";

const Contact = () => {
    const [user, setUser] = useState(
        {
            Name:"Name", email:"Email", subject:"Subject", Message:"Message"
        }
    )
    let values, names
    const data = (e) => {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    const send = async(e) =>{
        const {Name,email,subject,Message} = user
        e.preventDefault();
        const option = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name,email,subject,Message
            })
        }
        const send = await fetch('https://react-ecommerce-contact-cbdf4-default-rtdb.firebaseio.com/Message.json',option)

        if(send){
            alert("Message alert")
        }else{
            alert("Error Occoured Message Sent failed")
        }
    }
  return (
    <>
        <div className="contact">
            <div className="container">
                <div className="form">
                <h2># Contact Us!</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Name</h4>
                        </div>
                        <div className='input'>
                            <input type='text'  value={user.Name} name='Name' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>E-mail</h4>
                        </div>
                        <div className='input'>
                            <input type='email'  value={user.email} name='email' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Subject</h4>
                        </div>
                        <div className='input'>
                            <input type='text'  value={user.subject} name='subject' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Message</h4>
                        </div>
                        <div className='input'>
                            <textarea  value={user.Message} name='Message' onChange={data}></textarea>
                        </div>
                    </div>
                    <button type='submit' onClick={send}>Send</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
};

export default Contact;

