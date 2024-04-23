import elise_2 from "../assets/foto2.jpg";
import linkedin_icon from "../assets/linkedin-logo.png";
import email_icon from "../assets/mail.png";
import github_icon from "../assets/github-logo.png";

function ContactMe() {
  return (
    <div>
      <h1 className="title">Contact me</h1>
      <div className="contactme-div">
        <div className="contact-details">
          <p>
            Don't hesitate to contact me! You can reach me via Linkedin or by
            sending an email. I am open to any feedback, requests, questions, a
            converstation or just an hello. I'm looking forward to your message!{" "}
          </p>
          <div className="email">
            <img src={email_icon} alt="linkedin icon" className="icon" />
            <a href="mailto:elisejonkers18@hotmail.com">
              <p>elisejonkers18@hotmail.com</p>
            </a>
          </div>
          <div className="linkedin">
            <img src={linkedin_icon} alt="linkedin icon" className="icon" />
            <a
              href="https://www.linkedin.com/in/elise-jonkers-full-stack-developer/"
              target="_blank"
            >
              <p>elise-jonkers-full-stack-developer</p>
            </a>
          </div>
          <div className="github">
            <img src={github_icon} alt="github icon" className="icon" />
            <a href="https://github.com/elisejonkers" target="_blank">
              <p>elisejonkers</p>
            </a>
          </div>
        </div>
        <img src={elise_2} alt="second photo" />
      </div>
    </div>
  );
}

export default ContactMe;
