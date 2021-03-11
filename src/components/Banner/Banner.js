import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <Container fluid className='banner py-5'>
      <Row>
        <Col lg={12}>
          <FontAwesomeIcon icon={faFutbol} size='6x' className='text-white' />
          <h1 className='banner-title'>Fantacy Football</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
