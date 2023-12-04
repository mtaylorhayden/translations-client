import styles from "./NavigationBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" className={`${styles.customNavbar}`}>
      <Container>
        <Navbar.Brand>
          <Link className={styles.title} to="/">
            Study!
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.NavLinkLinks} me-auto`}>
            <Nav.Link>
              <Link className={styles.NavLinkLinks} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.NavLinkLinks} to="translations">
                Translations
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.NavLinkLinks} to="typing">
                Typing
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
