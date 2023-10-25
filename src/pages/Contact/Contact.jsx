import { HeaderH2 } from "../../components/Header/Header";
import { useState, useRef } from "react";
import "./Contact.css";
import { checkEmail } from "../../utilities/checkEmail";
import { sendMail } from "../../services/sendMail";

export function Contact() {
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [emptyName, setName] = useState(false);
  const [emptyMessage, setMessage] = useState(false);
  const [emptyForm, setForm] = useState(false);
  const [fetchError, setError] = useState(false);
  const [emailRes, setRes] = useState(false);

  function handleEmailChange(e) {
    const inputEmail = e.target.value;

    setInvalidEmail(checkEmail(inputEmail));
  }

  function handleNameChange(e) {
    if (e.target.value.length > 0) {
      setName(false);
    } else {
      setName(true);
    }
  }

  function handleMessageChange(e) {
    if (e.target.value.length > 0) {
      setMessage(false);
    } else {
      setMessage(true);
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const mail = {
      email: e.target.email.value.trim(),
      name: e.target.name.value.trim(),
      message: e.target.message.value.trim(),
    };

    if (e.target.email.value && e.target.name.value && e.target.message.value) {
      setForm(false);

      try {
        const res = await sendMail(mail);
        setError(false);
        if (res.ok) {
          setRes(true);
          emailRef.current.value = "";
          nameRef.current.value = "";
          messageRef.current.value = "";
        }
      } catch (error) {
        setError(true);
      }
    } else {
      setForm(true);
    }
  }

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef();
  return (
    <main className="contactForm">
      <HeaderH2 title="Contact us" />

      <form onSubmit={handleFormSubmit}>
        <div className="inputBlock">
          <label htmlFor="email">Email Address:</label>

          <input
            type="email"
            id="email"
            name="email"
            onBlur={handleEmailChange}
            required
            ref={emailRef}
          />
        </div>

        <div className="inputBlock">
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            id="name"
            name="name"
            onBlur={handleNameChange}
            required
            ref={nameRef}
          />
        </div>

        <div className="inputBlock">
          <label htmlFor="message">Message:</label>

          <textarea
            name="message"
            id="message"
            cols="50"
            rows="4"
            onBlur={handleMessageChange}
            ref={messageRef}
            required
          ></textarea>
        </div>

        {invalidEmail ? null : <p>Please input a valid email address!</p>}
        {emptyName ? <p>Name field required!</p> : null}
        {emptyMessage ? <p>Message field required!</p> : null}
        {emptyForm ? <p>Please make sure all fields are filled!</p> : null}
        {fetchError ? <p>Server error! Please try again later!</p> : null}

        {emailRes ? (
          <p className="success">Thank you for reaching out!</p>
        ) : null}

        <input id="submitbtn" type="submit" value="Submit" />
      </form>
    </main>
  );
}
