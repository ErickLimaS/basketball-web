import React from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles'

export default function YesterdayHighlights({ item }) {
  return (
    <C.Container>
      <section>
        <div className='flex team'>
          <div className='team-home-visitant'>
            <small>{item.home_team.abbreviation}</small>
            {item.home_team.id === 1 &&
              <img src='https://logotyp.us/files/atlanta-hawks.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.id === 2 &&
              <img src='https://logotyp.us/files/brooklyn-nets.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.id === 3 &&
              <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.id === 4 &&
              <img src='https://logotyp.us/files/boston-celtics.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.id === 5 &&
              <img src='https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.id === 6 &&
              <img src='https://logotyp.us/files/chicago-bulls.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.id === 7 &&
              <img src='https://logotyp.us/files/cleveland-cavaliers.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.id === 8 &&
              <img src='https://logotyp.us/files/dallas-mavericks.svg' alt={item.home_team.full_name}></img>}
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
            <Link to={`team/${item.home_team.id}`}><h2>{item.home_team.full_name}</h2></Link>
          </div>
        </div>

        <div className='status'>
          <div className='score-results'>
            <div className={item.time === '' ? 'score deactiveted' : 'score'}>
              <h3>{item.home_team_score}</h3>
            </div>
            <p>
              X
            </p>
            <div className={item.time === '' ? 'score deactiveted' : 'score'}>
              <h3>{item.visitor_team_score}</h3>
            </div>
          </div>
          <div className={item.time === '' ? 'match-time' : 'match-time active'}>
            <p>{item.status}</p>
            <p>{item.time}</p>
          </div>
        </div>

        <div className='flex inverse team'>
          <div className='team-home-visitant'>
            <small>{item.visitor_team.abbreviation}</small>
            {item.visitor_team.id === 1 &&
              <img src='https://logotyp.us/files/atlanta-hawks.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.id === 2 &&
              <img src='https://logotyp.us/files/brooklyn-nets.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.id === 3 &&
              <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.id === 4 &&
              <img src='https://logotyp.us/files/boston-celtics.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.id === 5 &&
              <img src='https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.id === 6 &&
              <img src='https://logotyp.us/files/chicago-bulls.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.id === 7 &&
              <img src='https://logotyp.us/files/cleveland-cavaliers.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.id === 8 &&
              <img src='https://logotyp.us/files/dallas-mavericks.svg' alt={item.visitor_team.full_name}></img>}
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
            <Link to={`team/${item.visitor_team.id}`}><h2>{item.visitor_team.full_name}</h2></Link>
          </div>
        </div>
      </section>
    </C.Container>
  )
}
