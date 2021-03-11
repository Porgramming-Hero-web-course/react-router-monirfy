import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row, Image, Nav } from 'react-bootstrap';
import maleImg from '../../image/male.png';
import femaleImg from '../../image/female.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, faFlag, faFutbol, faMars);

const TeamsDetails = () => {
  const { idTeam } = useParams();

  const [team, setTeam] = useState({});

  const { strTeam, strSport, strGender, intFormedYear, strCountry, strDescriptionEN, strTeamBadge, strTeamBanner } = team;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [idTeam]);
  return (
    <>
      <Container fluid className='px-0'>
        <img className='' src={strTeamBanner} style={{ width: '100%', height: 'auto' }} alt={strSport} />
      </Container>
      <Container>
        <Row className='my-5 bg-primary rounded py-3 text-white align-items-center'>
          <Col lg={8}>
            <Image className='width50' src={strTeamBadge} roundedCircle />
            <h3>{strTeam}</h3>

            <ul className='list-unstyled'>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' />
                Founded: {intFormedYear}
              </li>
              <li>
                <FontAwesomeIcon icon={faFlag} className='mr-2' />
                Country: {strCountry}
              </li>
              <li>
                <FontAwesomeIcon icon={faFutbol} className='mr-2' />
                Sport Type: {strSport}
              </li>
              <li>
                <FontAwesomeIcon icon={faMars} className='mr-2' />
                Gender: {strGender}
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <img className='img-fluid' src={Object.strGender !== 'female' ? maleImg : femaleImg} alt='' />
          </Col>
        </Row>
        <Row>
          <Col lg='12'>
            <p>{strDescriptionEN}</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          <Nav>
            <Nav.Item>
              <Nav.Link href='/home'>
                <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>
                <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>
                <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </>
  );
};

export default TeamsDetails;
