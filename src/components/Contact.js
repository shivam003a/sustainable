const Contact = () => {
    return (
        <>
            <section className="contact">
                <h1>Contact</h1>
                <div className="contact-sub-div">
                    <div className="contact-desc">
                        <span>At Earthly, we're here to help with any questions or concerns you may have about The Sustainable Kit. Whether you need help with your order, have a suggestion for us, or just want to say hello, we're always happy to hear from you.</span>
                        <span>Please don't hesitate to reach out to us by phone number +91-4363646754. Our customer service team is available from 9am to 5pm +5:30 GMT and will get back to you as soon as possible.</span>
                        <span>Thank you for choosing Earthly and for taking a step towards a more sustainable future!</span>
                    </div>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email" />
                            <textarea type="text-box" placeholder="Your Message" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;