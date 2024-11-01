// src/components/AddContact.jsx
import React, { useState } from "react";
import { addContact } from "../services/apiService";

const AddContact = ({ onContactAdded }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = new FormData();
    contactData.append("first_name", firstName);
    contactData.append("last_name", lastName);
    contactData.append("twitter_username", twitterUsername);
    contactData.append("notes", notes);
    if (image) {
      contactData.append("image", image);
    }

    try {
      await addContact(contactData);
      onContactAdded();
      setFirstName("");
      setLastName("");
      setTwitterUsername("");
      setNotes("");
      setImage(null);
    } catch (error) {
      console.error("Failed to add contact:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Twitter Username:</label>
        <input
          type="text"
          value={twitterUsername}
          onChange={(e) => setTwitterUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
