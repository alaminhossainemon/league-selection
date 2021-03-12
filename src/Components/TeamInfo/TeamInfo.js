import React from 'react';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';
import './TeamInfo.css';
import facebook from '../../images/Facebook.png';
import twitter from '../../images/Twitter.png';
import youtube from '../../images/YouTube.png';

const TeamInfo = (props) => {
    const {intFormedYear, strCountry,strLeague,strGender, strSport, strDescriptionEN,strFacebook, strInstagram, strStadiumDescription,strTeamBadge,strTeamBanner, strTwitter,strYoutube} = props.team;
    
    return (
        <div>
            <div className="bannerImg">
            <img src={strTeamBanner} alt=""/>
            </div>
            
            <div className="teamInfo">
            <div className="listInfo">
            <h1>{strLeague}</h1>
            <ul>
                 <li>{intFormedYear}</li>
                 <li>{strCountry}</li>
                 <li>{strSport}</li>
                 <li>{strGender}</li>

            </ul>
            </div>
            <div className="genderImg">
                {
                    strGender ? <img src= {maleImg} alt=""/> : <img src= {femaleImg} alt=""/>
                }
            </div>
            </div>
            <div className="description">
                <p>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
                <footer className="footer">
                    <a href= {strFacebook}>
                        <img src={facebook} alt=""/>
                        </a>
                
                    <a href={strTwitter}>
                        <img src={twitter} alt=""/>
                    </a>
                    <a href={strYoutube}>
                        <img src={youtube} alt=""/>
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default TeamInfo;