import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='py-5 bg-light text-center'>
      <Container>
        <Row>
          <Col lg={12}>
            <h3>Fantasy Football</h3>
            <p className='lead mb-0'>
              This template made with <span className='text-danger'>❤</span> by Monir Hossain
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
