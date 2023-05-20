import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
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
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
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
      {/* <Header />
      <AddContacts addContactHandler={addContactHandler} />
    <ContactList contacts={contacts} getContactID={removeContactHandler} />*/}
      {/* ---------------------------------------------------------------
              old code, but currently not working
      --------------------------------------------------------------- */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={ContactList} />
          <Route path="/add" exact Component={AddContacts} />
        </Routes>
      </BrowserRouter>
      {/* ---------------------------------------------------------------
  old code after adding "Routes" Above code working but not importent now
--------------------------------------------------------------- */}

      {/* <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact render={(props) => (
              <ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)}
          />
          <Route path="/add"  render={(props) => (  <AddContacts {...props} addContactHandler={addContactHandler} />  )}
          />
        </Routes>
      </BrowserRouter> */}
      {/* ---------------------------------------------------------------
        Above code not working but it must run to get to apply future program
--------------------------------------------------------------- */}
    </div>
  );
}

export default App;
