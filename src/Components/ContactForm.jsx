import React, { useState } from "react";
import "./../Styles/ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const API_BASE_URL = "https://todonodejs-1ean.onrender.com/api/v1/email/new";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Display the success message from the backend
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form
      className="Ajooba u-Column"
      style={{ justifyContent: "space-evenly" }}
      onSubmit={handleSubmit}
    >
      <div
        className="Ajooba-Box u-Row"
        style={{ justifyContent: "space-between" }}
      >
        <label className="Ajooba-Label" htmlFor="name">
          Name:
        </label>
        <input
          className="Ajooba-Input"
          placeholder="Elon Musk"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div
        className="Ajooba-Box u-Row"
        style={{ justifyContent: "space-between" }}
      >
        <label className="Ajooba-Label" htmlFor="email">
          Email:
        </label>
        <input
          className="Ajooba-Input"
          placeholder="you@example.com"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div
        className="Ajooba-Box u-Row"
        style={{ justifyContent: "space-between" }}
      >
        <label className="Ajooba-Label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="Ajooba-Input"
          placeholder="Hello 🙂"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className="Ajooba-Button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
