import React from "react";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";
// import ContactCard from './ContactCard';

function App() {

  const contacts = [
    {
      id: "1",
      name: "Indra",
      email: "aritra1999.dey@gmail.com",
    },
    {
      id: "2",
      name: "Ridhi",
      email: "aritracst.1999.dey@gmail.com",
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContacts />
      <ContactList contacts={contacts} />
      {/* <ContactCard /> */}
    </div>
  );
}

export default App;
