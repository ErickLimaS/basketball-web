import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as C from './styles'
import Axios from 'axios'
import API from '../../api/BasketApiBallDontLie';
import OctoberSeason from '../../components/MonthSeason/OctoberSeason';
import NovemberSeason from '../../components/MonthSeason/NovemberSeason';
import DecemberSeason from '../../components/MonthSeason/DecemberSeason';
import JanuarySeason from '../../components/MonthSeason/JanuarySeason';
import FebruarySeason from '../../components/MonthSeason/FebruarySeason';
import MarchSeason from '../../components/MonthSeason/MarchSeason';
import AprilSeason from '../../components/MonthSeason/AprilSeason';

export default function Team() {
    const [basketTeam, setBasketTeam] = useState([])
    const [chosenSeason, setChosenSeason] = useState()
    const date = new Date().getFullYear() - 1 //get current year and sets to show current season
    const [season, setSeason] = useState(date)
    const [seasonAux, setSeasonAux] = useState(date)

    let teamId = useParams();
    teamId = teamId.id

    let logo;
    if (Number.parseInt(teamId) === 1) {
        logo = 'https://logotyp.us/files/atlanta-hawks.svg'
    }
    else if (Number.parseInt(teamId) === 2) {
        logo = 'https://logotyp.us/files/boston-celtics.svg'
    }
    else if (Number.parseInt(teamId) === 3) {
        logo = 'https://logotyp.us/files/brooklyn-nets.svg'
    }
    else if (Number.parseInt(teamId) === 4) {
        logo = 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg'
    }
    else if (Number.parseInt(teamId) === 5) {
        logo = 'https://logotyp.us/files/chicago-bulls.svg'
    }
    else if (Number.parseInt(teamId) === 6) {
        logo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(teamId) === 7) {
        logo = 'https://logotyp.us/files/cleveland-cavaliers.svg'
    }
    else if (Number.parseInt(teamId) === 8) {
        logo = 'https://logotyp.us/files/dallas-mavericks.svg'
    }
    else if (Number.parseInt(teamId) === 9) {
        logo = 'https://logotyp.us/files/denver-nuggets.svg'
    }
    else if (Number.parseInt(teamId) === 10) {
        logo = 'https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg'
    }
    else if (Number.parseInt(teamId) === 11) {
        logo = 'https://logotyp.us/files/houston-rockets.svg'
    }
    else if (Number.parseInt(teamId) === 12) {
        logo = 'https://logotyp.us/files/indiana-pacers.svg'
    }
    else if (Number.parseInt(teamId) === 13) {
        logo = 'https://logowik.com/content/uploads/images/la-clippers7166.jpg'
    }
    else if (Number.parseInt(teamId) === 14) {
        logo = 'https://logotyp.us/files/los-angeles-lakers.svg'
    }
    else if (Number.parseInt(teamId) === 15) {
        logo = 'https://logotyp.us/files/memphis-grizzlies.svg'
    }
    else if (Number.parseInt(teamId) === 16) {
        logo = 'https://logotyp.us/files/miami-heat.svg'
    }
    else if (Number.parseInt(teamId) === 17) {
        logo = 'https://logotyp.us/files/milwaukee-bucks.svg'
    }
    else if (Number.parseInt(teamId) === 18) {
        logo = 'https://logotyp.us/files/timberwolves.svg'
    }
    else if (Number.parseInt(teamId) === 19) {
        logo = 'https://logotyp.us/files/pelicans.svg'
    }
    else if (Number.parseInt(teamId) === 20) {
        logo = 'https://logotyp.us/files/new-york-knicks.svg'
    }
    else if (Number.parseInt(teamId) === 21) {
        logo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(teamId) === 22) {
        logo = 'https://logotyp.us/files/orlando-magic.svg'
    }
    else if (Number.parseInt(teamId) === 23) {
        logo = 'https://logotyp.us/files/76ers.svg'
    }
    else if (Number.parseInt(teamId) === 24) {
        logo = 'https://logotyp.us/files/phoenix-suns.svg'
    }
    else if (Number.parseInt(teamId) === 25) {
        logo = 'https://logotyp.us/files/portland-trail-blazers.svg'
    }
    else if (Number.parseInt(teamId) === 26) {
        logo = 'https://logotyp.us/files/sacramento-kings.svg'
    }
    else if (Number.parseInt(teamId) === 27) {
        logo = 'https://logotyp.us/files/spurs.svg'
    }
    else if (Number.parseInt(teamId) === 28) {
        logo = 'https://logotyp.us/files/toronto-raptors.svg'
    }
    else if (Number.parseInt(teamId) === 29) {
        logo = 'https://logotyp.us/files/utah-jazz.svg'
    }
    else if (Number.parseInt(teamId) === 30) {
        logo = 'https://logotyp.us/files/washington-wizards.svg'
    }

    useEffect(() => {
        const load1 = async () => {
            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/teams/${teamId}`)
            setBasketTeam(data)
        }
        load1()
        const load2 = async () => {
            const { data } = await API.GetPresentSeason(teamId)
            setChosenSeason(data)
            console.log(chosenSeason)
        }
        load2()
    }, [])

    const searchSeason = async (team, year) => {
        const { data } = await API.GetSeason(team, year)
        setChosenSeason(data)
        setSeasonAux(year)
        console.log(seasonAux)
        console.log(seasonAux)
        console.log(chosenSeason)
    }
    console.log(basketTeam)

    return (
        <C.Container style={{
            'background-image': `url(${logo})`, 'background-repeat': 'no-repeat', 'background-size': 'auto',
            'background-position': 'center'
        }}>
            <div className='team-page'>
                <div className='about-team'>
                    <h1>{basketTeam.full_name}</h1>
                    <div className='img'>
                        <img className={Number.parseInt(teamId) === 4 || Number.parseInt(teamId) === 10 ? 'img-from-other-links-tweaks' : ''} src={logo} alt={basketTeam.full_name} />
                    </div>
                    <aside>
                        <ul>
                            <li>City: <span>{basketTeam.city}</span></li>
                            <li><span>{basketTeam.conference}</span> Conference</li>
                            <li>Division: <span>{basketTeam.division}</span></li>
                        </ul>
                    </aside>
                </div>

                <div className='all-season-info' >
                    <div className='season-score' >
                        <div className='season-year'>
                            {seasonAux && <h2>Season {seasonAux} - {Number.parseInt(seasonAux) + 1}</h2>}
                            <div className='search-button'>
                                <label htmlFor='seasons'>Search Season</label>
                                <input id='seasons'
                                    type='text'
                                    value={season}
                                    placeholder=''
                                    onChange={(e) => {
                                        setSeason(e.target.value)
                                    }}>
                                </input>
                                <button type='button' onClick={() => searchSeason(basketTeam.id, season)} >Search</button>
                            </div>
                        </div>
                        <div className='game-statistics'>
                            <div className='grid-item'>
                                {seasonAux !== '' ? <OctoberSeason season={seasonAux} id={teamId} /> : ''}
                            </div>
                            <div className='grid-item'>
                                {seasonAux !== '' ? <NovemberSeason season={seasonAux} id={teamId} /> : ''}
                            </div>
                            <div className='grid-item'>
                                {seasonAux !== '' ? <DecemberSeason season={seasonAux} id={teamId} /> : ''}
                            </div>
                            <div className='grid-item'>
                                {seasonAux !== '' ? <JanuarySeason season={seasonAux} id={teamId} /> : ''}
                            </div>
                            <div className='grid-item'>
                                {seasonAux !== '' ? <FebruarySeason season={seasonAux} id={teamId} /> : ''}
                            </div>
                            <div className='grid-item'>
                                {seasonAux !== '' ? <MarchSeason season={seasonAux} id={teamId} /> : ''}
                            </div>
                            <div className='grid-item'>
                                {seasonAux !== '' ? <AprilSeason season={seasonAux} id={teamId} /> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </C.Container>
    )
}
