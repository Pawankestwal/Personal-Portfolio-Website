import "./FormStyle.css"
import React from 'react'

const Form = () => {
    return <div className="form">(
        <form name="contact" netlify>
            <label>Your Name*</label>
            <input type="text" name="name" required></input>
            <label>Email*</label>
            <input type="email" name="email" required></input>
            <label>Subject*</label>
            <input type="text" name="subject" required></input>
            <label>Message*</label>
            <textarea rows="6" placeholder="Type Your Message Here" />
            <button className="btn" type>Submit</button>
        </form>
    </div>;

};

export default Form