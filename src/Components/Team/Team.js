import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Team = (props) => {
    const { strSport, strTeamLogo , idTeam } = props.team;
    return (
        <div>
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strTeamLogo} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                       {strSport}
                    </Card.Text>
                    <Link to={`/team/${idTeam}`}><Button variant="primary">Explore</Button></Link>
                </Card.Body>
           </Card>
        </div>
    );
};

export default Team;