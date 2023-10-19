import { HeaderH2 } from "../components/Header/Header";
import { useState } from "react";
import "./Contact.css";

export function Contact() {
  let [invalidEmail, setInvalidEmail] = useState(true);

  function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  function handleEmailChange(e) {
    const inputEmail = e.target.value;

    setInvalidEmail(checkEmail(inputEmail));
  }

  return (
    <main className="contactForm">
      <HeaderH2 title="Contact us" />
      <br />
      <br />
      <form action="">
        <label htmlFor="email">Email Address:</label>
        <br />
        <br />

        <input
          type="email"
          id="email"
          name="email"
          onBlur={handleEmailChange}
          required
        />
        <br />
        <br />

        <label htmlFor="name">Name:</label>
        <br />
        <br />

        <input type="text" id="name" name="name" required />
        <br />
        <br />

        <label htmlFor="message">Message:</label>
        <br />
        <br />

        <textarea
          name="message"
          id="message"
          cols="50"
          rows="4"
          required
        ></textarea>
        <br />
        <br />

        {invalidEmail ? null : <p>Please input a valid email address!</p>}
        <br />
        <br />
        <input id="submitbtn" type="submit" value="Submit" />
      </form>
    </main>
  );
}
