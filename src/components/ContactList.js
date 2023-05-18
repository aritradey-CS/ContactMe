import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContacthandler = (id) => {
    props.getContactId(id);
  };

  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContacthandler}
        key={contact.id}
      />
    );
  });

  return (
    <>
      <div className="main">
        <h3>
          Contact List
          <Link to="/add">
            <button className="btn btn-outline-success">Add Contacts</button>
          </Link>
        </h3>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </>
  );
};

export default ContactList;
