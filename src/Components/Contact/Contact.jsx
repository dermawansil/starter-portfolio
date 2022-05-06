import React from 'react'
import './Contact.css'
/*import emailjs from '@emailjs/browser';*/

const Contact = () => {

   /* const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }; */
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur t-blurl"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>

            </div>

            <div className="c-right">
                <form>
                    <input type="text" name='user-name' className='user' placeholder='Name' />
                    <input type="email" name='user-email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type="submit" value="Send" className='button' />

                    <div
                        className="blur c-blurl"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>


            </div>
        </div>
    )
}

export default Contact
