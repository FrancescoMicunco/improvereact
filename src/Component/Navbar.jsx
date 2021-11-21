import {Nav, Container} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'

const Navbar =()=>{
const location = useLocation()

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
              <Link to="/contact">
                <div className="nav-link">Contact</div>
              </Link>
              <Link to="/dishes">
                <div className="nav-link">Dishes</div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navbar