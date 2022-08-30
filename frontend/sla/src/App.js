import './App.css';

import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

function App() {

  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="App">
      <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand>Steam Listing Analyzer</NavBar.Brand>
        </Container>
      </NavBar>
      <Container className='mt-5'>
        <Row>
          <Col></Col>
          <Col xs={7}>
            <Form>
              <Row className='d-flex justify-content-center'>
                <Col xs='auto'>
                  <Form.Group className="mb-2">
                    <Form.Control placeholder='Enter in game name'>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs='auto'>
                  <Button type='submit' className='mb-2'>
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
