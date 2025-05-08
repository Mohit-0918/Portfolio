import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../CSS/contact.css';

const url = "https://services-kgrd.onrender.com";
export const Contact = () => {
const formInitialDetails = {
firstName: '',
lastName: '',
email: '',
phone: '',
message: ''
};
const [formDetails, setFormDetails] = useState(formInitialDetails);
const [buttonText, setButtonText] = useState('Send');
const [status, setStatus] = useState({});

// Add this useEffect to auto-clear status after 5 seconds
useEffect(() => {
  if (status.message) {
    const timer = setTimeout(() => setStatus({}), 5000);
    return () => clearTimeout(timer);
  }
}, [status]);

const onFormUpdate = (category, value) => {
setFormDetails({
    ...formDetails,
    [category]: value
});
};

const validateForm = () => {
const { firstName, lastName, email, phone, message } = formDetails;
if (!firstName || !lastName || !email || !phone || !message) {
    setStatus({ success: false, message: 'All fields are required.' });
    return false;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    setStatus({ success: false, message: 'Invalid email address.' });
    return false;
}
return true;
};

const handleSubmit = async (e) => {
e.preventDefault();
if (!validateForm()) return;

setButtonText("Sending...");
try {
    const payload = {
    Email: formDetails.email,
    Fname: formDetails.firstName,
    Sname: formDetails.lastName,
    Pno: formDetails.phone,
    Msg: formDetails.message
    };

    const response = await fetch(`${url}/api/email/send`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(payload),
    });

    setButtonText("Send");
    const result = await response.json();
    setFormDetails(formInitialDetails);

    if (response.ok) {
    setStatus({ success: true, message: 'Message sent successfully.' });
    } else {
    setStatus({ success: false, message: result.message || 'Something went wrong, please try again later.' });
    }
} catch (error) {
    setButtonText("Send");
    setStatus({ success: false, message: 'An error occurred. Please try again later.' });
}
};

return (
<section className="contact" id="connect">
    <Container>
    <Row className="align-items-center">
        <Col size={12} md={6}>
        <TrackVisibility>
            {({ isVisible }) =>
            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
            }
        </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                </Row>
                {
                    status.message &&
                    <Col>
                        <div className={`contact-status-message ${status.success ? "success" : "error"}`}>
                          {status.success ? (
                            <span className="contact-status-icon" role="img" aria-label="Success checkmark">
                              ✔️
                            </span>
                          ) : (
                            <span className="contact-status-icon" role="img" aria-label="Error cross">
                              ❌
                            </span>
                          )}
                          <span>{status.message}</span>
                        </div>
                    </Col>
                }
                </form>
            </div>}
        </TrackVisibility>
        </Col>
    </Row>
    </Container>
</section>
);
};
