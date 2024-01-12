import { Link, useNavigate } from "react-router-dom";

function NavBar() {
const navigateTo = useNavigate()

const handleLinkClick = (sectionId) => {
  navigateTo("/");
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/"}>
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            </Link>
          </li>
          <li className="nav-item">
              <button className="nav-link" href="#" onClick={() => handleLinkClick("aboutMe")}>
                About me
              </button>
          </li>
          <li className="nav-item">
              <button className="nav-link" href="#" onClick={() => handleLinkClick("projects")}>
                Projects
              </button>
          </li>
          <li className="nav-item">
              <button className="nav-link" href="#" onClick={() => handleLinkClick("skills")}>
                Skills
              </button>
          </li>
          <li className="nav-item">
              <button className="nav-link" href="#" onClick={() => handleLinkClick("education")}>
                Education
              </button>
          </li>
          <li className="nav-item">
              <button className="nav-link" href="#" onClick={() => handleLinkClick("experience")}>
                Professional experience
              </button>
          </li>
          {/* <li class="nav-item">
                <Link to={}>
                <a class="nav-link" href="#">Contact me</a>
                </Link>
              </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
