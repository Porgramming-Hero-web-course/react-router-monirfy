import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='py-5 bg-light text-center'>
      <Container>
        <h3>Fantasy Football</h3>
        <p className='lead mb-0'>
          {' '}
          This template made with <span className='text-danger'>❤</span> by Monir Hossain
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
