import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Tab from 'react-bootstrap/Col';
import LessonController from './Lessons/LessonController';

export default function StudentNavbar(props) {
  const navigate = useNavigate();
  const [course, set_course] = useState('');
  const [course_list, set_course_list] = useState([]);

  if (!course) {
    set_course(props.loginUser.course[0])
  }
  if(!course_list.length){
    set_course_list(props.loginUser.course);
  }
  console.log('props', props);
  const logout = () => {
    console.log('logout');
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  }

  const selectLesson = (event) => {
    console.log('selectLesson', event.target.innerHTML);
    set_course(event.target.innerHTML);
  }

  return (
    <>
      <Navbar key='false' expand='false' className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Welcome, {props.loginUser.first_name}</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                {props.loginUser.first_name}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link onClick={logout}>Log Out</Nav.Link>
                {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
              </Nav>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container>
        <Nav variant="tabs" defaultActiveKey='0'>
          {course_list.map((item, index) => (
            <Nav.Item key={index} onClick={selectLesson}>
              <Nav.Link eventKey={index} value={course}>{item}</Nav.Link>
              
            </Nav.Item>
          ))}
        </Nav>
        <LessonController selectedCourse={course}/>
      </Container>
    </>
  );
}