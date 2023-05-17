import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContacthandler = (id) => {
    props.getContactId(id);
  };
  const contacts = [
    {
      id: "1",
      name: "Richi",
      email: "richi1998@gmail.com",
    },
  ];
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContacthandler}
        key={contact.id}
      />
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
