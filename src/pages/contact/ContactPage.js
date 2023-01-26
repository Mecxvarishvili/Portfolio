import React from 'react';

const ContactPage = () => {
    return (
        <div className="contactPage" >
            <div className='mainTitle' >contact</div>
            <div className="desc" >You can reach me at<span> vmecxvarishvili@gmail.com</span></div>
            <form className="contactForm" method="POST" action="https://formspree.io/f/xwkjpqok" >
                <div className="cont" >
                    <input className="samething" id="name" name="name" placeholder="Name" required />
                    <input className="samething" id="email" name="email" placeholder="Email" type="email" required />
                    <textarea className="samething" id="message" name="message" placeholder="Message" required />
                </div>
                <button type="submit" >Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;