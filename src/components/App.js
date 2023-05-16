import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";
// import ContactCard from './ContactCard';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setContacts(retriveContacts);
}, []); 

useEffect(() => {
 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      {/* <ContactCard /> */}
    </div>
  );
}

export default App;
