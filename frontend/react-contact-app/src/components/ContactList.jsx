// src/components/ContactList.jsx
import React, { useEffect, useState } from "react";
import { fetchContacts } from "../services/apiService";

const ContactList = ({ reloadContacts }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const data = await fetchContacts();
      console.log(data);
      setContacts(data);
    };

    getContacts();
  }, [reloadContacts]); // Fetch contacts when reloadContacts changes

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <img
                src={contact.image}
                alt={`${contact.first_name} ${contact.last_name}`}
                width={50}
              />
              <p>
                Name: {contact.first_name} {contact.last_name}
              </p>
              <p>Twitter: @{contact.twitter_username}</p>
              <p>Notes: {contact.notes}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};

export default ContactList;
