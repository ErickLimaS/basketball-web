import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as C from './styles'
import Axios from 'axios';
import API from '../../api/BasketApiBallDontLie'
import logo from '../../img/players/player1.png'
import FinishedGame from '../../components/FinishedGame/FinishedGame';

export default function Player() {
    const [player, setPlayer] = useState();
    const [auxArray, setAuxArray] = useState([])
    const [lastGame, setLastGame] = useState([]);
    const [basketTeam, setBasketTeam] = useState([])
    const [isFetch, setIsFetch] = useState(false)

    const playerId = useParams();
    const date = new Date() // date to map, find closest game played
    date.setDate(1)
    date.setMonth(0)
    date.setFullYear(1980)

    let gameDate;

    useEffect(() => {

        window.scrollTo(0, 0);

        const load1 = async () => {
            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/players/${playerId.id}`)

            setPlayer(data)

        }
        load1()
        const load2 = async () => {
            const { data } = await API.GetPlayerLastGame(playerId.id)

            setLastGame(data)

            function test(item) {
                let itemDate = new Date(item.game.date)
                if (itemDate > date) {
                    return itemDate
                }
                else {
                    return
                }
            }
            setAuxArray(lastGame.map(test))
            setAuxArray(auxArray.sort(function (a, b) { return a - b }))

            setIsFetch(true)
        }
        load2()

    }, [playerId])

    console.log(auxArray)
    console.log(gameDate)
    console.log(lastGame)



    if (isFetch === true) {
        gameDate = lastGame[0].game.date
        gameDate = new Date(gameDate)
        console.log(gameDate)
    }

    console.log(basketTeam)

    let teamLogo;

    if (isFetch === true) {
        if (Number.parseInt(player.team.id) === 1) {
            teamLogo = 'https://logotyp.us/files/atlanta-hawks.svg'
        }
        else if (Number.parseInt(player.team.id) === 2) {
            teamLogo = 'https://logotyp.us/files/boston-celtics.svg'
        }
        else if (Number.parseInt(player.team.id) === 3) {
            teamLogo = 'https://logotyp.us/files/brooklyn-nets.svg'
        }
        else if (Number.parseInt(player.team.id) === 4) {
            teamLogo = 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg'
        }
        else if (Number.parseInt(player.team.id) === 5) {
            teamLogo = 'https://logotyp.us/files/chicago-bulls.svg'
        }
        else if (Number.parseInt(player.team.id) === 6) {
            teamLogo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
        }
        else if (Number.parseInt(player.team.id) === 7) {
            teamLogo = 'https://logotyp.us/files/cleveland-cavaliers.svg'
        }
        else if (Number.parseInt(player.team.id) === 8) {
            teamLogo = 'https://logotyp.us/files/dallas-mavericks.svg'
        }
        else if (Number.parseInt(player.team.id) === 9) {
            teamLogo = 'https://logotyp.us/files/denver-nuggets.svg'
        }
        else if (Number.parseInt(player.team.id) === 10) {
            teamLogo = 'https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg'
        }
        else if (Number.parseInt(player.team.id) === 11) {
            teamLogo = 'https://logotyp.us/files/houston-rockets.svg'
        }
        else if (Number.parseInt(player.team.id) === 12) {
            teamLogo = 'https://logotyp.us/files/indiana-pacers.svg'
        }
        else if (Number.parseInt(player.team.id) === 13) {
            teamLogo = 'https://logowik.com/content/uploads/images/la-clippers7166.jpg'
        }
        else if (Number.parseInt(player.team.id) === 14) {
            teamLogo = 'https://logotyp.us/files/los-angeles-lakers.svg'
        }
        else if (Number.parseInt(player.team.id) === 15) {
            teamLogo = 'https://logotyp.us/files/memphis-grizzlies.svg'
        }
        else if (Number.parseInt(player.team.id) === 16) {
            teamLogo = 'https://logotyp.us/files/miami-heat.svg'
        }
        else if (Number.parseInt(player.team.id) === 17) {
            teamLogo = 'https://logotyp.us/files/milwaukee-bucks.svg'
        }
        else if (Number.parseInt(player.team.id) === 18) {
            teamLogo = 'https://logotyp.us/files/timberwolves.svg'
        }
        else if (Number.parseInt(player.team.id) === 19) {
            teamLogo = 'https://logotyp.us/files/pelicans.svg'
        }
        else if (Number.parseInt(player.team.id) === 20) {
            teamLogo = 'https://logotyp.us/files/new-york-knicks.svg'
        }
        else if (Number.parseInt(player.team.id) === 21) {
            teamLogo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
        }
        else if (Number.parseInt(player.team.id) === 22) {
            teamLogo = 'https://logotyp.us/files/orlando-magic.svg'
        }
        else if (Number.parseInt(player.team.id) === 23) {
            teamLogo = 'https://logotyp.us/files/76ers.svg'
        }
        else if (Number.parseInt(player.team.id) === 24) {
            teamLogo = 'https://logotyp.us/files/phoenix-suns.svg'
        }
        else if (Number.parseInt(player.team.id) === 25) {
            teamLogo = 'https://logotyp.us/files/portland-trail-blazers.svg'
        }
        else if (Number.parseInt(player.team.id) === 26) {
            teamLogo = 'https://logotyp.us/files/sacramento-kings.svg'
        }
        else if (Number.parseInt(player.team.id) === 27) {
            teamLogo = 'https://logotyp.us/files/spurs.svg'
        }
        else if (Number.parseInt(player.team.id) === 28) {
            teamLogo = 'https://logotyp.us/files/toronto-raptors.svg'
        }
        else if (Number.parseInt(player.team.id) === 29) {
            teamLogo = 'https://logotyp.us/files/utah-jazz.svg'
        }
        else if (Number.parseInt(player.team.id) === 30) {
            teamLogo = 'https://logotyp.us/files/washington-wizards.svg'
        }
    }
    return (
        <C.Container >

            {isFetch === true ?
                (
                    <div className='player-info' style={{
                        'background-image': `url(${teamLogo})`,
                        'backgroundPosition': 'center',
                        'background-repeat': 'no-repeat',
                        'background-size': 'auto'
                    }}>
                        <div className='img'>
                            <img src={logo} alt={`${player.first_name} ${player.last_name}`} />
                        </div>
                        <div className='info'>
                            <div>
                                <h1>{player.first_name} {player.last_name} </h1>
                                <Link to={`/team/${lastGame[0].player.team_id}`}>
                                    <h2 className='team-name'>{player.team.full_name}</h2>
                                </Link>
                            </div>
                            <h2>Position: {player.position}</h2>
                            <h2>Height: {player.height_feet}' {player.height_inches}</h2>
                            <h2>{player.weight_pounds} Pounds</h2>
                            <p>{auxArray.push[99]}</p>
                        </div>
                        <div className='last-game-stats'>
                            <h2>Last Game Stats</h2>
                            <h3>
                                {gameDate.getDate()}/{gameDate.getMonth()}/{gameDate.getFullYear()}
                            </h3>
                            <div>
                                <Link to={`/game/${lastGame[0].game.id}`}>
                                    <h4>
                                        {lastGame[0].game.home_team_id === lastGame[0].team.id ?
                                            `${lastGame[0].team.full_name}` : 'Not Available'
                                        } - {lastGame[0].game.home_team_score} vs {lastGame[0].game.visitor_team_score} - {lastGame[0].game.visitor_team_id === lastGame[0].team.id ?
                                            `${lastGame[0].team.full_name}` : 'Not Available'
                                        }
                                    </h4>
                                </Link>
                            </div>
                            <ul>
                                <li><span>Points:</span> {lastGame[0].pts}</li>
                                <li><span>Assists:</span> {lastGame[0].ast}</li>
                                <li><span>Blocks:</span> {lastGame[0].blk}</li>
                                <li><span>Steals:</span> {lastGame[0].stl}</li>
                                <li><span>3PT Made:</span> {lastGame[0].fg3m}</li>
                                <li><span>3PT Attempt</span>: {lastGame[0].fg3a}</li>
                                <li><span>FT Made:</span> {lastGame[0].ftm}</li>
                                <li><span>FT Attempt:</span> {lastGame[0].fta}</li>
                                <li><span>Turnovers:</span> {lastGame[0].turnover}</li>
                            </ul>
                        </div>
                    </div>
                ) : ( 
                    //loading skeleton
                    <div className='player-info skeleton' style={{
                        'background-image': `url()`,
                        'backgroundPosition': 'center',
                        'background-repeat': 'no-repeat',
                        'background-size': 'auto'
                    }}>
                        <div className='img'  style={{
                        'width': '190px!important',
                        'height': '240px!important'
                    }}>
                            <img src='#' alt='#'/>
                        </div>
                        <div className='info'>
                            <div>
                                <h1 className='skeleton-text'> </h1>
                                <Link to='#' className='team-name skeleton-text'>
                                    <h2> </h2>
                                </Link>
                            </div>
                            <h2 className='skeleton-text'> </h2>
                            <h2 className='skeleton-text'> </h2>
                            <h2 className='skeleton-text'> </h2>
                            <p className='skeleton-text'></p>
                        </div>
                        <div className='last-game-stats skeleton'>
                            <h2 className='skeleton-text'> </h2>
                            <h3 className='skeleton-text'> </h3>
                            <div className='skeleton-text'>
                                <Link to='#'>
                                    <h4> </h4>
                                </Link>
                            </div>
                            <ul>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                                <li className='skeleton-text'><span></span></li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </C.Container>
    )
}
