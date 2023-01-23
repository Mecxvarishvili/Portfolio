import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <div className='mainTitle' >contact</div>
            <form method="POST" action="https://formspree.io/f/xwkjpqok" >
                <input id="name" name="name" placeholder="Name" required />
                <input id="email" name="email" placeholder="Email" type="email" required />
                <textarea id="message" name="message" placeholder="Message" required />
                <button type="submit" >Send</button>
            </form>
        </div>
    );
};

export default ContactPage;