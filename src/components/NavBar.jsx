import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to={"/"}>
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/aboutme"}>
              <a class="nav-link" href="#">
                About me
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/projects"}>
              <a class="nav-link" href="#">
                Projects
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/skills"}>
              <a class="nav-link" href="#">
                Skills
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/education"}>
              <a class="nav-link" href="#">
                Education
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/experience"}>
              <a class="nav-link" href="#">
                Professional experience
              </a>
            </Link>
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
