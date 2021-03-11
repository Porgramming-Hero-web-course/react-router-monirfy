import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import TeamsCard from '../TeamsCard/TeamsCard';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <>
      <Container className='py-5'>
        <Row>
          {teams.map((team) => (
            <TeamsCard key={team.idTeam} team={team}></TeamsCard>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Teams;
