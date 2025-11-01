/*import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import user from "../images/user.png";


const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return <div className="main">Contact not found.</div>;
  }

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
        <div className="center-div">
            <Link to="/"><button className="ui button  blue center">Back to Contact List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail; */


import React from "react";
import { useParams, Link } from "react-router-dom";
import user from "../images/user.jpg";
import "./css/ContactDetails.css";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return <div className="contact-detail-container">Contact not found.</div>;
  }

  return (
    <div className="contact-detail-container">
      <div className="contact-card">
        <div className="contact-image">
          <img src={user} alt="user" />
        </div>

        <div className="contact-info">
          <h3 className="contact-name">{contact.name}</h3>
          <p className="contact-email">{contact.email}</p>
        </div>

        <div className="back-btn-container">
          <Link to="/">
            <button className="back-btn">Back to Contact List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;

