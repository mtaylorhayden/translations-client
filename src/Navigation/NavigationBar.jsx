import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" className={`${styles.customNavbar}`}>
      <Container>
        <Navbar.Brand href="#home" className={styles.title}>
          Study!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.links}>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className={styles.links}>
              <Link to="translations">Translations</Link>
            </Nav.Link>
            <Nav.Link className={styles.links}>
              <Link to="typing">Typing</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
