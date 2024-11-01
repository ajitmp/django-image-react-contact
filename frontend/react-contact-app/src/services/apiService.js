// src/services/apiService.js
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/contact-details/";

//axios.defaults.withCredentials = true;

// Function to fetch all contacts
export const fetchContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

// Function to add a new contact
export const addContact = async (contactData) => {
  try {
    const response = await axios.post(API_URL, contactData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Add Authorization header if needed, e.g., Bearer token
        // 'Authorization': `Bearer ${your_token_here}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

/**
 * Update an existing contact in the backend.
 * @param {number} id - The ID of the contact to update.
 * @param {Object} updatedData - The updated data for the contact.
 * @returns {Promise<Object>} The updated contact object.
 */
export const updateContact = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, updatedData, {
      headers: {
        "Content-Type": "multipart/form-data", // Adjust content type based on the data being sent
      },
    });
    return response.data; // Return the updated contact
  } catch (error) {
    console.error(`Error updating contact with id ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a contact from the backend.
 * @param {number} id - The ID of the contact to delete.
 * @returns {Promise<void>} A promise that resolves when the contact is deleted.
 */
export const deleteContact = async (id) => {
  try {
    await axios.delete(`${API_URL}${id}/`);
    // Optionally, return some confirmation message if needed
  } catch (error) {
    console.error(`Error deleting contact with id ${id}:`, error);
    throw error;
  }
};
