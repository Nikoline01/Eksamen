import mail from "./src/assets/mail.webp";
import linkedIn from "./src/assets/linkedIn.webp";

export default function Footer() {
  return (
    <footer className="footer">
      <h1>CONTACT</h1>
      <div className="contact-box">
        <div className="contact-row">
          <a href="mailto:Nikolinerholm@hotmail.com">
            <img src={mail} alt="mail"></img>
          </a>
        </div>
        <div className="contact-row">
          <a href="https://www.linkedin.com/in/nikoline-holm-4a265328b">
            <img src={linkedIn} alt="linkedin"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
