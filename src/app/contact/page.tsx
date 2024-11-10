"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import "./contact.css";
import "../compnents/animations.css"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="contact-container desktop-view">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submitted && (
          <p className="thank-you-message">Thank you for your message!</p>
        )}
      </div>

      {/* Mobile View */}
      <div className="contact-container mobile-view">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submitted && (
          <p className="thank-you-message">Thank you for your message!</p>
        )}
      </div>

      <h1 className="bottom">
        let's connect with me
      </h1>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.facebook.com/share/xjPt4s7rhHbLSgsa/?mibextid=qi2Omg/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook" className="social-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/noorul-sehar-7468b6246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src="/linkdin.png" alt="LinkedIn" className="social-icon"/>
        </a>
        <a href="https://www.instagram.com/noorulsehar2003?utm_source=qr&igsh=MWJkeTJyeWZpZzNobA==/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.png" alt="Instagram" className="social-icon"/>
        </a>
        <a href="https://github.com/nh7220869" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="social-icon"/>
        </a>
        <a href="https://wa.me/03021260393" target="_blank" rel="noopener noreferrer">
          <img src="/whats.png" alt="WhatsApp" className="social-icon"/>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXPVFnfqMSRJdrWtKCmrRvdQtXrZbdzCBNLchLBqjdwrdfjpxDWtnKRZJcGSHFBLMvZlg" target="_blank" rel="noopener noreferrer">
          <img src="/gmail.png" alt="gmail" className="social-icon"/>
        </a>
      </div>
    </>
  );
}