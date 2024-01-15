import { Link } from "react-router-dom";
import linkedin_icon from "../assets/linkedin-logo.png";
import github_icon from "../assets/github-logo.png";

function Header() {
  return (
    <section className="header">

      <div className="header-item">
        <a href="https://www.linkedin.com/in/elise-jonkers-full-stack-developer/">
          <img src={linkedin_icon} alt="linkedin icon" className="icon" />
        </a>
        <a href="https://github.com/elisejonkers">
          <img src={github_icon} alt="github icon" className="icon" />
        </a>
      </div>

      <div className="header-item">
      <h4>Elise Jonkers</h4>
      </div>

      <div className="header-item">
      <h5>Download my CV</h5>
      </div>

    </section>
  );
}

export default Header;
