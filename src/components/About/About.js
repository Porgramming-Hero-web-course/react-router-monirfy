import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
const About = () => {
  return (
    <>
      <Container fluid className='banner py-5'>
        <Row>
          <Col>
            <h1 className='banner-title'>About Us</h1>
          </Col>
        </Row>
      </Container>
      <Container className='py-5'>
        <Row>
          <Col>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat expedita. Dolores iste sed quas nemo nisi. Repellat vitae
              veritatis quod ratione corrupti placeat officia qui iste eligendi itaque fugit sapiente cumque suscipit, sed minus aspernatur
              praesentium et error doloribus harum atque? Consequuntur praesentium quod laudantium dolore enim recusandae pariatur!
            </p>
            <p>
              Esse nesciunt accusamus explicabo dolorem, aut nulla ab enim necessitatibus eius corporis quam assumenda? Fuga voluptates, aspernatur in
              asperiores provident animi nesciunt quia officia alias aut odio facilis delectus illum aperiam quas corporis excepturi culpa enim
              voluptas amet debitis quam quos pariatur! Voluptate corrupti beatae tempore at similique quibusdam libero suscipit consectetur culpa
              quas explicabo accusamus, rerum molestias iure nesciunt, quidem, tempora maxime sequi labore est cupiditate.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
