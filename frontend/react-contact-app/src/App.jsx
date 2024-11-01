// src/App.jsx
import React, { useState } from "react";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import "./index.css";

const App = () => {
  const [reloadContacts, setReloadContacts] = useState(false);

  const handleContactAdded = () => {
    setReloadContacts((prev) => !prev);
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <AddContact onContactAdded={handleContactAdded} />
      <ContactList reloadContacts={reloadContacts} />
    </div>
  );
};

export default App;
