import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../css/Contact.css'; // Optional: Your custom styles

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xoew71z',     // Replace with your EmailJS service ID
        'template_oiilu7c',    // Replace with your EmailJS template ID
        form.current,
        'K4lewPRSxbrZimYvD'      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="section bg-white py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">Get In Touch</h2>
        <Row className="g-4 align-items-stretch">
          {/* Left Column */}
          <Col md={6} className="d-flex">
            <div className="contact-card p-4 bg-light rounded shadow-sm w-100 d-flex flex-column justify-content-center align-items-center">
              <p className="text-center mb-4">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
              </p>
              <div className="d-flex justify-content-center gap-4 mt-2">
                <a href="https://github.com/Shrutkeerti200" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/shrutkeerti-sangolkar/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaLinkedin size={28} />
                </a>
                <a href="mailto:sangolkar.s@northeastern.edu" className="icon-link">
                  <FaEnvelope size={28} />
                </a>
                <a href="tel:+18573519673" className="icon-link">
                  <FaPhoneAlt size={26} />
                </a>
              </div>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={6} className="d-flex">
            <div className="contact-card p-4 bg-light rounded shadow-sm w-100 d-flex flex-column justify-content-between">
              <h5 className="fw-semibold mb-3">Send me a message</h5>
              <Form ref={form} onSubmit={sendEmail} className="d-flex flex-column flex-grow-1">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" name="user_name" placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" name="user_email" placeholder="Your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSentAt">
                  <Form.Control type="hidden" name="date" value={new Date().toLocaleString()} />
                </Form.Group>
                <Form.Group className="mb-3 flex-grow-1" controlId="formMessage">
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Your message" required className="h-100" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-auto">
                  ✉️ Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
