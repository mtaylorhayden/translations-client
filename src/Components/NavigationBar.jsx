import styles from "./NavigationBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useGuideContext } from "../Context/GuideContext";
import { useAuthContext } from "../Context/AuthContext";

// wrap this in authenticated flag
export const NavigationBar = () => {
  const { isAuthenticated } = useAuthContext();
  const { setSelectedGuide } = useGuideContext();
  const { guides } = useGuideContext();
  const { isLoading } = useGuideContext();
  console.log("navbar ", isAuthenticated);

  const handleGuideClick = (id) => {
    const guide = guides.find((item) => item.id === id);
    setSelectedGuide(guide);
  };

  // this content can be set to our default
  let content = (
    <>
      <Nav.Link>
        <Link className={styles.NavLinkLinks} to="/">
          Sign In
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link className={styles.NavLinkLinks} to="register">
          Register
        </Link>
      </Nav.Link>
    </>
  );

  if (!isLoading && isAuthenticated) {
    content = guides.map((guide) => {
      return (
        <Nav className={`${styles.NavLinkLinks} me-auto`}>
          <Nav.Link>
            <Link className={styles.NavLinkLinks} to="/admin">
              Admin
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className={styles.NavLinkLinks} to="typing">
              Typing
            </Link>
          </Nav.Link>
          <NavDropdown
            className={styles.NavLinkLinks}
            title={
              <Link className={styles.NavLinkLinks} to="guides">
                Guides
              </Link>
            }
          ></NavDropdown>
          <NavDropdown.Item key={guide.id}>
            <Link
              className={styles.NavLinkLinks}
              to={`guide/${guide.id}`}
              onClick={() => handleGuideClick(guide.id)}
            >
              {guide.title}
            </Link>
          </NavDropdown.Item>
        </Nav>
      );
    });
  }

  return (
    <Navbar expand="lg" className={`${styles.customNavbar}`}>
      <Container>
        <Navbar.Brand>
          <Link className={styles.title} to="/">
            Study!
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-na v" />
        <Navbar.Collapse id="basic-navbar-nav">{content}</Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
