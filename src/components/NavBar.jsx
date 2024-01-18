import { Link, useNavigate } from "react-router-dom";
import linkedin_icon from "../assets/linkedin-logo.png";
import github_icon from "../assets/github-logo.png";

function NavBar() {
  const navigateTo = useNavigate();

  const handleLinkClick = (sectionId) => {
    navigateTo("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-52"
          >
            <li>
              <a onClick={() => handleLinkClick("aboutme")}>About me</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("projects")}>Projects</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("skills")}>Skills</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("timeline")}>Over the years</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("contactme")}>Contact me</a>
            </li>
          </ul>
        </div>
        <Link to='/'>
        <a className="btn btn-ghost text-xl elisejonkers" onClick={scrollToTop}>Elise Jonkers</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => handleLinkClick("aboutme")}>About me</a>
          </li>
          <li>
            <a onClick={() => handleLinkClick("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => handleLinkClick("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => handleLinkClick("timeline")}>Over the years</a>
          </li>
          <li>
            <a onClick={() => handleLinkClick("contactme")}>Contact me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="header-item">
        <a href="https://www.linkedin.com/in/elise-jonkers-full-stack-developer/" target="_blank">
          <img src={linkedin_icon} alt="linkedin icon" className="icon" />
        </a>
        <a href="https://github.com/elisejonkers" target="_blank">
          <img src={github_icon} alt="github icon" className="icon" />
        </a>
      </div>
      </div>
    </div>   
  );
}

export default NavBar;
