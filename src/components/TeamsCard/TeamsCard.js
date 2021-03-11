import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const TeamsCard = (props) => {
  const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
  return (
    <Col lg={4} md={6}>
      <Card className='mb-4 text-center'>
        <Card.Body>
          <Card.Img variant='top' src={strTeamBadge} style={{ width: '50%', margin: 'auto' }} />
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>{strSport}</Card.Text>
          <Link to={`/details/${idTeam}`}>
            <Button variant='primary'>
              Explore <FontAwesomeIcon icon={faArrowRight} className='text-white' />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamsCard;
