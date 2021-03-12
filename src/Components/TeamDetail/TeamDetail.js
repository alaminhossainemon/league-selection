import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamInfo from '../TeamInfo/TeamInfo';

const TeamDetail = () => {
    const {teamId} = useParams();
    const[teamInfo, setTeamInfo] = useState([]);
    useEffect(() =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => setTeamInfo(data.teams))
    },[teamId]);
    return (
        <div>
            {
              teamInfo.map((team =><TeamInfo team={team}></TeamInfo>))
            }
        </div>
    );
};

export default TeamDetail;