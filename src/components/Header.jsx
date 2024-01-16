import linkedin_icon from "../assets/linkedin-logo.png";
import github_icon from "../assets/github-logo.png";
import cvFile from "../assets/EliseJonkers_FullStackDeveloper_Resume.pdf"


function Header() {
  const downloadCV = () => {
    window.open(cvFile, '_blank')
  }


  return (
    <section className="header bg-secondary">

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
      <button className="btn btn-accent" onClick={downloadCV}>Download my CV</button>
      </div>

    </section>
  );
}

export default Header;
