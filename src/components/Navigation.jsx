import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineUserAdd, AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
function Navivation() {
  const [user, setUser] = useState(false);
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container fluid="xxl">
        <Navbar.Brand href="/">
          <GrReactjs className="fs-2 me-1" /> Anime for all
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/updated">
              <Nav.Link>Updated</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/allanime">
              <Nav.Link>All Anime</Nav.Link>
            </LinkContainer>
            {user && (
              <LinkContainer to="/favoite">
                <Nav.Link>Favorite Animes</Nav.Link>
              </LinkContainer>
            )}
            <LinkContainer to="/search" onClick={() => setUser(true)}>
              <Nav.Link>
                <BiSearch /> Search
              </Nav.Link>
            </LinkContainer>
            {user ? (
              <Button
                variant="outline-primary fw-bolder"
                size="sm"
                onClick={() => setUser(false)}
              >
                <AiOutlineLogout
                  className="me-1 fs-6"
                  style={{ marginBottom: "2px" }}
                />
                Log out
              </Button>
            ) : (
              <LinkContainer to="/signup">
                <Nav.Link>
                  <AiOutlineUserAdd className="me-1 mb-1 fs-5 text-muted " />
                  Sign up
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navivation;
