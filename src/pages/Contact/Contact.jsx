import { HeaderH2 } from "../../components/Header/Header";
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

      <form onSubmit={() => {}}>
        <div className="inputBlock">
          <label htmlFor="email">Email Address:</label>

          <input
            type="email"
            id="email"
            name="email"
            onBlur={handleEmailChange}
            required
          />
        </div>

        <div className="inputBlock">
          <label htmlFor="name">Name:</label>

          <input type="text" id="name" name="name" required />
        </div>

        <div className="inputBlock">
          <label htmlFor="message">Message:</label>

          <textarea
            name="message"
            id="message"
            cols="50"
            rows="4"
            required
          ></textarea>
        </div>

        {invalidEmail ? null : <p>Please input a valid email address!</p>}

        <input id="submitbtn" type="submit" value="Submit" />
      </form>
    </main>
  );
}
