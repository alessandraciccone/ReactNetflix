import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/img/netflix_logo.png";
import "../Components/MyNavBar.css";
function MyNavBar() {
  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="NetflixLogo" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#tv" className="text-light">
                Tv-Show
              </Nav.Link>
              <Nav.Link href="#movies" className="text-light">
                Movies
              </Nav.Link>
              <Nav.Link href="#recent" className="text-light">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#mylist" className="text-light">
                MyList
              </Nav.Link>
            </Nav>
            <span className="d-none d-lg-block">
              <i className="bi bi-search text-white"></i>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
