function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        <div className="contact-info">
          <h1>Get In Touch</h1>

          <p>
            Have a question, need support, or want to become a volunteer?
            Send us a message and we will guide you to the right community service.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> helphub@gmail.com</p>
            <p><strong>Phone:</strong> +961 81 255 000</p>
            <p><strong>Location:</strong> Lebanon</p>
          </div>
        </div>

        <form className="contact-form">

          <label>
            Full Name
            <input type="text" placeholder="Enter your name" />
          </label>

          <label>
            Email Address
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            Message Type
            <select>
              <option>Choose an option</option>
              <option>Support</option>
              <option>Volunteer</option>
              <option>General Question</option>
            </select>
          </label>

          <label>
            Message
            <textarea placeholder="Write your message here..."></textarea>
          </label>

          <button type="submit">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;