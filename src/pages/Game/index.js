import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GameScore from '../../components/GameScore/GameScore'
import * as C from './styles'
import API from '../../api/BasketApiBallDontLie'
import FinishedGame from '../../components/FinishedGame/FinishedGame'
import GameStatistics from '../../components/GameStatistics/GameStatistics'

export default function Game() {
    const [gameScore, setGameScore] = useState([])
    const [gameStats, setGameStats] = useState([])
    const [isFetch, setIsFetch] = useState(false)

    const gameId = useParams().id
    let team1logo;
    let team2logo;

    useEffect(() => {
        const load1 = async () => {
            const { data } = await API.SpecificGameScore(gameId)
            setGameScore(data)
            setIsFetch(true)
        }
        load1()
        yesterdayGameStats(gameId)
    }, [gameId])

    console.log(gameScore)
    console.log(team1logo)
    console.log(team2logo)

    const yesterdayGameStats = async (gameId) => {
        const { data } = await API.SpecificFinishedBasketGameById(gameId)
        setGameStats(data)
    }

    const load2 = () => {
        if (isFetch === true) {
            team1logo = gameScore.home_team.id
            team2logo = gameScore.visitor_team.id
            console.log(team1logo)
            console.log(team2logo)
        }
    }
    load2()

    let logo;
    if (Number.parseInt(team1logo) === 1) {
        logo = 'https://logotyp.us/files/atlanta-hawks.svg'
    }
    else if (Number.parseInt(team1logo) === 2) {
        logo = 'https://logotyp.us/files/boston-celtics.svg'
    }
    else if (Number.parseInt(team1logo) === 3) {
        logo = 'https://logotyp.us/files/brooklyn-nets.svg'
    }
    else if (Number.parseInt(team1logo) === 3) {
        logo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(team1logo) === 5) {
        logo = 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg'
    }
    else if (Number.parseInt(team1logo) === 6) {
        logo = 'https://logotyp.us/files/chicago-bulls.svg'
    }
    else if (Number.parseInt(team1logo) === 7) {
        logo = 'https://logotyp.us/files/cleveland-cavaliers.svg'
    }
    else if (Number.parseInt(team1logo) === 8) {
        logo = 'https://logotyp.us/files/dallas-mavericks.svg'
    }
    else if (Number.parseInt(team1logo) === 9) {
        logo = 'https://logotyp.us/files/denver-nuggets.svg'
    }
    else if (Number.parseInt(team1logo) === 10) {
        logo = 'https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg'
    }
    else if (Number.parseInt(team1logo) === 11) {
        logo = 'https://logotyp.us/files/houston-rockets.svg'
    }
    else if (Number.parseInt(team1logo) === 12) {
        logo = 'https://logotyp.us/files/indiana-pacers.svg'
    }
    else if (Number.parseInt(team1logo) === 13) {
        logo = 'https://logowik.com/content/uploads/images/la-clippers7166.jpg'
    }
    else if (Number.parseInt(team1logo) === 14) {
        logo = 'https://logotyp.us/files/los-angeles-lakers.svg'
    }
    else if (Number.parseInt(team1logo) === 15) {
        logo = 'https://logotyp.us/files/memphis-grizzlies.svg'
    }
    else if (Number.parseInt(team1logo) === 16) {
        logo = 'https://logotyp.us/files/miami-heat.svg'
    }
    else if (Number.parseInt(team1logo) === 17) {
        logo = 'https://logotyp.us/files/milwaukee-bucks.svg'
    }
    else if (Number.parseInt(team1logo) === 18) {
        logo = 'https://logotyp.us/files/timberwolves.svg'
    }
    else if (Number.parseInt(team1logo) === 19) {
        logo = 'https://logotyp.us/files/pelicans.svg'
    }
    else if (Number.parseInt(team1logo) === 20) {
        logo = 'https://logotyp.us/files/new-york-knicks.svg'
    }
    else if (Number.parseInt(team1logo) === 21) {
        logo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(team1logo) === 22) {
        logo = 'https://logotyp.us/files/orlando-magic.svg'
    }
    else if (Number.parseInt(team1logo) === 23) {
        logo = 'https://logotyp.us/files/76ers.svg'
    }
    else if (Number.parseInt(team1logo) === 24) {
        logo = 'https://logotyp.us/files/phoenix-suns.svg'
    }
    else if (Number.parseInt(team1logo) === 25) {
        logo = 'https://logotyp.us/files/portland-trail-blazers.svg'
    }
    else if (Number.parseInt(team1logo) === 26) {
        logo = 'https://logotyp.us/files/sacramento-kings.svg'
    }
    else if (Number.parseInt(team1logo) === 27) {
        logo = 'https://logotyp.us/files/spurs.svg'
    }
    else if (Number.parseInt(team1logo) === 28) {
        logo = 'https://logotyp.us/files/toronto-raptors.svg'
    }
    else if (Number.parseInt(team1logo) === 29) {
        logo = 'https://logotyp.us/files/utah-jazz.svg'
    }
    else if (Number.parseInt(team1logo) === 30) {
        logo = 'https://logotyp.us/files/washington-wizards.svg'
    }

    let logo2;
    if (Number.parseInt(team2logo) === 1) {
        logo2 = 'https://logotyp.us/files/atlanta-hawks.svg'
    }
    else if (Number.parseInt(team2logo) === 2) {
        logo2 = 'https://logotyp.us/files/boston-celtics.svg'
    }
    else if (Number.parseInt(team2logo) === 3) {
        logo2 = 'https://logotyp.us/files/brooklyn-nets.svg'
    }
    else if (Number.parseInt(team2logo) === 3) {
        logo2 = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(team2logo) === 5) {
        logo2 = 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg'
    }
    else if (Number.parseInt(team2logo) === 6) {
        logo2 = 'https://logotyp.us/files/chicago-bulls.svg'
    }
    else if (Number.parseInt(team2logo) === 7) {
        logo2 = 'https://logotyp.us/files/cleveland-cavaliers.svg'
    }
    else if (Number.parseInt(team2logo) === 8) {
        logo2 = 'https://logotyp.us/files/dallas-mavericks.svg'
    }
    else if (Number.parseInt(team2logo) === 9) {
        logo2 = 'https://logotyp.us/files/denver-nuggets.svg'
    }
    else if (Number.parseInt(team2logo) === 10) {
        logo2 = 'https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg'
    }
    else if (Number.parseInt(team2logo) === 11) {
        logo2 = 'https://logotyp.us/files/houston-rockets.svg'
    }
    else if (Number.parseInt(team2logo) === 12) {
        logo2 = 'https://logotyp.us/files/indiana-pacers.svg'
    }
    else if (Number.parseInt(team2logo) === 13) {
        logo2 = 'https://logowik.com/content/uploads/images/la-clippers7166.jpg'
    }
    else if (Number.parseInt(team2logo) === 14) {
        logo2 = 'https://logotyp.us/files/los-angeles-lakers.svg'
    }
    else if (Number.parseInt(team2logo) === 15) {
        logo2 = 'https://logotyp.us/files/memphis-grizzlies.svg'
    }
    else if (Number.parseInt(team2logo) === 16) {
        logo2 = 'https://logotyp.us/files/miami-heat.svg'
    }
    else if (Number.parseInt(team2logo) === 17) {
        logo2 = 'https://logotyp.us/files/milwaukee-bucks.svg'
    }
    else if (Number.parseInt(team2logo) === 18) {
        logo2 = 'https://logotyp.us/files/timberwolves.svg'
    }
    else if (Number.parseInt(team2logo) === 19) {
        logo2 = 'https://logotyp.us/files/pelicans.svg'
    }
    else if (Number.parseInt(team2logo) === 20) {
        logo2 = 'https://logotyp.us/files/new-york-knicks.svg'
    }
    else if (Number.parseInt(team2logo) === 21) {
        logo2 = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(team2logo) === 22) {
        logo2 = 'https://logotyp.us/files/orlando-magic.svg'
    }
    else if (Number.parseInt(team2logo) === 23) {
        logo2 = 'https://logotyp.us/files/76ers.svg'
    }
    else if (Number.parseInt(team2logo) === 24) {
        logo2 = 'https://logotyp.us/files/phoenix-suns.svg'
    }
    else if (Number.parseInt(team2logo) === 25) {
        logo2 = 'https://logotyp.us/files/portland-trail-blazers.svg'
    }
    else if (Number.parseInt(team2logo) === 26) {
        logo2 = 'https://logotyp.us/files/sacramento-kings.svg'
    }
    else if (Number.parseInt(team2logo) === 27) {
        logo2 = 'https://logotyp.us/files/spurs.svg'
    }
    else if (Number.parseInt(team2logo) === 28) {
        logo2 = 'https://logotyp.us/files/toronto-raptors.svg'
    }
    else if (Number.parseInt(team2logo) === 29) {
        logo2 = 'https://logotyp.us/files/utah-jazz.svg'
    }
    else if (Number.parseInt(team2logo) === 30) {
        logo2 = 'https://logotyp.us/files/washington-wizards.svg'
    }

    let team1 = []
    let team2 = []
    let aux1 = gameStats
    // console.log(aux1)

    const filter = (aux) => {
        // console.log(aux.player.team_id)

        if (team1.length === 0) {
            return team1.push(aux)
        }
        else if (team1.length !== 0 && team1[0].player.team_id === aux.player.team_id) {
            return team1.push(aux)
        }
        else if (team2.length === 0) {
            return team2.push(aux)
        }
        else if (team2.length !== 0 && team2[0].player.team_id === aux.player.team_id) {
            return team2.push(aux)
        }
        else {
            return console.log('problema ' + aux1)
        }

    }
    gameStats.filter(filter)

    return (
        <C.Container>
            <div>
                {isFetch === true ?
                    <FinishedGame item={gameScore} /> :
                    <h2>Game Not Found or Non Existent.</h2>
                }
            </div>

            <div className='teams-names'>
                <h2>Players on This Match</h2>
                {isFetch === true && <h3>{gameScore.home_team.name} Vs {gameScore.visitor_team.name}</h3>}
            </div>

            <div className='players-statistics'>
                <div className='team-img' style={{
                    'background-image': `url(${logo})`, 'background-repeat': 'no-repeat', 'background-size': 'auto',
                    'background-position': 'center'
                }}>
                    {team2.map((team2, key) => (
                        <GameStatistics team2={team2} key={team2.id} />
                    ))}

                </div>
                <div className='team-img' style={{
                    'background-image': `url(${logo2})`, 'background-repeat': 'no-repeat', 'background-size': 'auto',
                    'background-position': 'center'
                }}>

                    {team1.map((team1, key) => (
                        <GameStatistics team1={team1} key={team1.id} />
                    ))}
                </div>
            </div>
        </C.Container>
    )
}
