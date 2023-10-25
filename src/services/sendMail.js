export function sendMail(mail) {
  return fetch(
    "https://nick-portfolio-backend-c827ba36c82f.herokuapp.com/contact/mailer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    }
  );
}
