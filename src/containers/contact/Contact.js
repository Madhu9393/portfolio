import React, { useState } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your form submission logic (e.g., Formspree, EmailJS, or your backend)
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia hideResume={true} />
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Contact Illustration"
            src={require("../../assets/images/contactMail.png")}
          />
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="lets-connect-container">
        <div className="lets-connect-content">
          <h2 className="lets-connect-title">Let's Connect</h2>
          <p className="lets-connect-subtitle">Have a question or want to work together? Send me a message!</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
                className="form-textarea"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={16} style={{ marginRight: '8px' }} />
                  Send Message
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
