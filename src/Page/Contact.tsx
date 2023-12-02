import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        {/* Display your information here */}
        <h2>Contact Information</h2>
        <p>Your contact information goes here...</p>
      </div>
      <div className="contact-form">
        {/* Display the Contact Form 7 shortcode as a string */}
        <h2>Contact Us</h2>
        <div>[contact-form-7 id="30c312c" title="Contact Us"]</div>
      </div>
    </div>
  );
};

export default ContactPage;
