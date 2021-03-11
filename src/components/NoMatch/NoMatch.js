import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
const NoMatch = () => {
  return (
    <Container className='py-5'>
      <Row className='text-center'>
        <Col lg={12}>
          <h2 className='display-1 text-danger'>404</h2>
          <h3 className='display-4'>Page Not Found 😭</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
