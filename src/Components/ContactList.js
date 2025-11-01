import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import "./css/ContactList.css";

const ContactList = (props) => {
  console.log(props);

  const deleteCotactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHander={deleteCotactHandler} key={contact.id} />
    );
  });

  return (
    <div className="contact-list">
      <h2>
        Contact List
        <Link to="/add">
          <button className="add-contact-btn" style={{ margin: "30px" }}>
            Add Contact
          </button>
        </Link>
      </h2>

      <div className="contact-items">
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;  


