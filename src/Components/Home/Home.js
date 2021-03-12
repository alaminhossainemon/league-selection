import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import stadium from '../../images/soccer-stadium-illumination-green-grass-260nw-654444583.webp';


const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => setTeams(data.teams));

    }, [])
    return (
    <div>
        <div className="bannerImg img">
            <img src={stadium} alt="" />
        </div>
        <div className="teamCard">
            {
                teams.map((team => <Team team={team}></Team>))
            }
        </div>
    </div>
    );
};

export default Home;