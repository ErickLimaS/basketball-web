import React, { useEffect, useState } from 'react'
import * as C from './styles'
import API from '../../../api/BasketApiBallDontLie'
import StatisticsPlayer from './StatisticsPlayer/StatisticsPlayer'
import { Link } from 'react-router-dom'

export default function YesterdayHighlights({ item }) {

  const [gameStats, setGameStats] = useState([])

  const yesterdayGameStats = async (gameId) => {
    const { data } = await API.SpecificFinishedBasketGameById(gameId)
    setGameStats(data)
  }

  const date = new Date(item.date.split("T")[0])
  const yyyy = date.getFullYear()
  const mm = date.getMonth() + 1
  const dd = date.getDate()

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

  // console.log(team1)
  // console.log(team2)


  useEffect(() => {
    yesterdayGameStats(item.id)


  }, [])

  // console.log(gameStats)

  return (

    <div className='game-statistics' id={item.id} >
      <C.Container>
        <div className='section-map'>
          <Link to={`/game/${item.id}`}>
            <div className='score-and-teams'>
              <div className='flex-2 team'>
                <div className='team-home-visitant'>
                  <small>{item.home_team.abbreviation}</small>

                  {item.home_team.id === 1 &&
                    <img src='https://logotyp.us/files/atlanta-hawks.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 2 &&
                    <img src='https://logotyp.us/files/boston-celtics.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 3 &&
                    <img src='https://logotyp.us/files/brooklyn-nets.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 4 &&
                    <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 5 &&
                    <img src='https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 6 &&
                    <img src='https://logotyp.us/files/chicago-bulls.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 7 &&
                    <img src='https://logotyp.us/files/dallas-mavericks.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 8 &&
                    <img src='https://logotyp.us/files/cleveland-cavaliers.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 9 &&
                    <img src='https://logotyp.us/files/denver-nuggets.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 10 &&
                    <img className='img-from-other-links-tweaks' src='https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 11 &&
                    <img src='https://logotyp.us/files/houston-rockets.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 12 &&
                    <img src='https://logotyp.us/files/indiana-pacers.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 13 &&
                    <img src='https://logowik.com/content/uploads/images/la-clippers7166.jpg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 14 &&
                    <img src='https://logotyp.us/files/los-angeles-lakers.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 15 &&
                    <img src='https://logotyp.us/files/memphis-grizzlies.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 16 &&
                    <img src='https://logotyp.us/files/miami-heat.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 17 &&
                    <img src='https://logotyp.us/files/milwaukee-bucks.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 18 &&
                    <img src='https://logotyp.us/files/timberwolves.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 19 &&
                    <img src='https://logotyp.us/files/pelicans.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 20 &&
                    <img src='https://logotyp.us/files/new-york-knicks.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 21 &&
                    <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 22 &&
                    <img src='https://logotyp.us/files/orlando-magic.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 23 &&
                    <img src='https://logotyp.us/files/76ers.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 24 &&
                    <img src='https://logotyp.us/files/phoenix-suns.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 25 &&
                    <img src='https://logotyp.us/files/portland-trail-blazers.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 26 &&
                    <img src='https://logotyp.us/files/sacramento-kings.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 27 &&
                    <img src='https://logotyp.us/files/spurs.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 28 &&
                    <img src='https://logotyp.us/files/toronto-raptors.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 29 &&
                    <img src='https://logotyp.us/files/utah-jazz.svg' alt={item.home_team.full_name}></img>}
                  {item.home_team.id === 30 &&
                    <img src='https://logotyp.us/files/washington-wizards.svg' alt={item.home_team.full_name}></img>}
                </div>
                <Link to={`team/${item.home_team.id}`}><h2>{item.home_team.full_name}</h2></Link>
              </div>

              <div className='status'>
                <div className='score-results'>
                  <div className='score'>
                    <h3>{item.home_team_score}</h3>
                  </div>
                  <p>
                    X
                  </p>
                  <div className='score'>
                    <h3>{item.visitor_team_score}</h3>
                  </div>
                </div>
                <div className='match-time active'>
                  <p>{dd}/{mm}/{yyyy}</p>
                  <p>{item.status}</p>
                </div>
              </div>

              <div className='flex-2 inverse team'>
                <div className='team-home-visitant'>
                  <small>{item.visitor_team.abbreviation}</small>
                  {item.visitor_team.id === 1 &&
                    <img src='https://logotyp.us/files/atlanta-hawks.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 2 &&
                    <img src='https://logotyp.us/files/boston-celtics.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 3 &&
                    <img src='https://logotyp.us/files/brooklyn-nets.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 4 &&
                    <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 5 &&
                    <img src='https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 6 &&
                    <img src='https://logotyp.us/files/chicago-bulls.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 7 &&
                    <img src='https://logotyp.us/files/dallas-mavericks.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 8 &&
                    <img src='https://logotyp.us/files/cleveland-cavaliers.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 9 &&
                    <img src='https://logotyp.us/files/denver-nuggets.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 10 &&
                    <img className='img-from-other-links-tweaks' src='https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 11 &&
                    <img src='https://logotyp.us/files/houston-rockets.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 12 &&
                    <img src='https://logotyp.us/files/indiana-pacers.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 13 &&
                    <img src='https://logowik.com/content/uploads/images/la-clippers7166.jpg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 14 &&
                    <img src='https://logotyp.us/files/los-angeles-lakers.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 15 &&
                    <img src='https://logotyp.us/files/memphis-grizzlies.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 16 &&
                    <img src='https://logotyp.us/files/miami-heat.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 17 &&
                    <img src='https://logotyp.us/files/milwaukee-bucks.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 18 &&
                    <img src='https://logotyp.us/files/timberwolves.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 19 &&
                    <img src='https://logotyp.us/files/pelicans.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 20 &&
                    <img src='https://logotyp.us/files/new-york-knicks.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 21 &&
                    <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 22 &&
                    <img src='https://logotyp.us/files/orlando-magic.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 23 &&
                    <img src='https://logotyp.us/files/76ers.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 24 &&
                    <img src='https://logotyp.us/files/phoenix-suns.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 25 &&
                    <img src='https://logotyp.us/files/portland-trail-blazers.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 26 &&
                    <img src='https://logotyp.us/files/sacramento-kings.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 27 &&
                    <img src='https://logotyp.us/files/spurs.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 28 &&
                    <img src='https://logotyp.us/files/toronto-raptors.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 29 &&
                    <img src='https://logotyp.us/files/utah-jazz.svg' alt={item.visitor_team.full_name}></img>}
                  {item.visitor_team.id === 30 &&
                    <img src='https://logotyp.us/files/washington-wizards.svg' alt={item.visitor_team.full_name}></img>}
                  <Link to={`team/${item.visitor_team.id}`}><h2>{item.visitor_team.full_name}</h2>
                  </Link>
                </div>
              </div>
            </div>
          </Link>

          <h2>Players</h2>
          <div className='statistics-players'>
            <div className='team-players'>
              <Link to={`/team/${item.home_team.id}`}><h4>{item.home_team.full_name}</h4></Link>
              {team2.map((team2, key) => (
                <StatisticsPlayer team2={team2} key={team2.id} />
              ))}
            </div>
            <hr/>
            <div className='team-players'>
            <Link to={`/team/${item.visitor_team.id}`}><h4>{item.visitor_team.full_name}</h4></Link>
              {team1.map((team1, key) => (
                <StatisticsPlayer team1={team1} key={team1.id} />
              ))}
            </div>
          </div>
        </div>
      </C.Container >
    </div >
  )
}
