import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import AddressImg from "./AddressImg";
import { Send } from "lucide-react";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isSubmitting: false,
      isSubmitted: false,
      error: null
    };
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <div style={{
                  position: 'relative',
                  width: '320px',
                  height: '320px',
                  borderRadius: '20px',
                  padding: '15px',
                  background: `linear-gradient(45deg, ${theme.imageHighlight}, ${theme.title})`,
                  boxShadow: `0 15px 35px ${theme.imageHighlight}40`,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  margin: '0 auto 3rem',
                  zIndex: 1,
                  overflow: 'hidden'
                }} className="profile-image-container">
                  <img
                    src={require("../../assets/images/Perapu_Madhu.jpg")}
                    alt="Perapu Madhu"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      border: `6px solid ${theme.body}`,
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.parentElement.style.transform = 'scale(1.05)';
                      e.currentTarget.parentElement.style.boxShadow = '0 12px 28px rgba(0,0,0,0.25)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.parentElement.style.transform = 'scale(1)';
                      e.currentTarget.parentElement.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                    }}
                  />
                </div>
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text" style={{ color: theme.text }}>
                  {ContactData["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
              </div>
            </div>
          </Fade>
          
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-form-container">
              <div className="contact-form-image">
                <AddressImg theme={theme} />
              </div>
              <div className="contact-form-wrapper">
                <h2 className="lets-connect-title" style={{ color: theme.text }}>Let's Connect</h2>
                <p className="lets-connect-subtitle" style={{ color: theme.secondaryText }}>
                  Have a question or want to work together? Send me a message!
                </p>
                
                <form 
                  action="https://formspree.io/f/xgejvjqa" 
                  method="POST"
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.setState({ isSubmitting: true, error: null });
                    
                    const form = e.target;
                    const data = new FormData(form);
                    
                    fetch(form.action, {
                      method: 'POST',
                      body: data,
                      headers: {
                        'Accept': 'application/json'
                      }
                    })
                    .then(response => {
                      if (response.ok) {
                        this.setState({ 
                          isSubmitted: true,
                          name: '',
                          email: '',
                          message: ''
                        });
                        form.reset();
                      } else {
                        throw new Error('Form submission failed');
                      }
                    })
                    .catch(error => {
                      this.setState({ 
                        error: 'There was a problem sending your message. Please try again later.',
                        isSubmitting: false 
                      });
                    });
                  }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      required
                      placeholder="Your name"
                      disabled={this.state.isSubmitting}
                      className="form-input"
                      style={{ 
                        backgroundColor: theme.imageHighlight,
                        color: theme.text,
                        border: `1px solid ${theme.text}`
                      }}
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      required
                      placeholder="Your email"
                      disabled={this.state.isSubmitting}
                      className="form-input"
                      style={{ 
                        backgroundColor: theme.imageHighlight,
                        color: theme.text,
                        border: `1px solid ${theme.text}`
                      }}
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      value={this.state.message}
                      onChange={(e) => this.setState({ message: e.target.value })}
                      required
                      rows="3"
                      placeholder="Your message..."
                      disabled={this.state.isSubmitting}
                      className="form-textarea"
                      style={{ 
                        backgroundColor: theme.imageHighlight,
                        color: theme.text,
                        border: `1px solid ${theme.text}`
                      }}
                    ></textarea>
                  </div>
                  
                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    {this.state.isSubmitted ? (
                      <div className="success-message" style={{ color: '#4CAF50', marginBottom: '20px' }}>
                        Thank you for your message! I'll get back to you soon.
                      </div>
                    ) : (
                      <>
                        <button
                          type="submit"
                          className="submit-button"
                          disabled={this.state.isSubmitting}
                          style={{
                            backgroundColor: this.state.isSubmitting ? '#cccccc' : theme.text,
                            color: theme.body,
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '25px',
                            cursor: this.state.isSubmitting ? 'not-allowed' : 'pointer',
                            fontSize: '16px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto',
                            transition: 'all 0.3s ease',
                            width: '100%',
                            maxWidth: '300px',
                            opacity: this.state.isSubmitting ? 0.7 : 1
                          }}
                        >
                          {this.state.isSubmitting ? (
                            'Sending...'
                          ) : (
                            <>
                              <Send size={14} style={{ marginRight: '6px' }} />
                              Send Message
                            </>
                          )}
                        </button>
                        {this.state.error && (
                          <div className="error-message" style={{ color: '#f44336', marginTop: '15px' }}>
                            {this.state.error}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Fade>
          
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-info-container" style={{ marginTop: '4rem', textAlign: 'center' }}>
              <div className="contact-info-grid">
                <div className="contact-info-item" style={{ marginBottom: '2rem' }}>
                  <div className="contact-info-icon" style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: theme.imageHighlight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '24px',
                    color: theme.text
                  }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 style={{ color: theme.text, marginBottom: '0.5rem' }}>{addressSection.title}</h3>
                  <p style={{ color: theme.secondaryText, margin: 0 }}>{addressSection.subtitle}</p>
                  {addressSection.location_map_link && (
                    <a 
                      href={addressSection.location_map_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: theme.text,
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginTop: '0.5rem',
                        fontWeight: '500',
                        borderBottom: `2px solid ${theme.text}`,
                        paddingBottom: '2px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                      onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      View on Map
                    </a>
                  )}
                </div>
                
                <div className="contact-info-item" style={{ marginBottom: '2rem' }}>
                  <div className="contact-info-icon" style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: theme.imageHighlight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '24px',
                    color: theme.text
                  }}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3 style={{ color: theme.text, marginBottom: '0.5rem' }}>{phoneSection.title}</h3>
                  <a 
                    href={`tel:${phoneSection.subtitle.replace(/\D/g, '')}`}
                    style={{
                      color: theme.text,
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {phoneSection.subtitle}
                  </a>
                  <p style={{ color: theme.secondaryText, margin: 0, fontSize: '0.9rem' }}>Available for calls</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
