import React from 'react'
import * as C from './styles'
import MIL from '../../img/logos/MIL.png'

export default function HomePageGames({ item }) {
  return (
    <C.Container>
      <section>
        <div className='flex team'>
          <div>
            <small>{item.home_team.abbreviation}</small>
            {item.home_team.abbreviation === 'ATL' &&
              <img src='https://logotyp.us/files/atlanta-hawks.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'BKN' &&
              <img src='https://logotyp.us/files/brooklyn-nets.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'OKC' &&
              <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'BOS' &&
              <img src='https://logotyp.us/files/boston-celtics.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'CHA' &&
              <img src='https://www.pngfind.com/pngs/m/151-1517994_wikipedia-charlotte-bobcats-logo-png-transparent-png.png' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'CHI' &&
              <img src='https://logotyp.us/files/chicago-bulls.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'CLE' &&
              <img src='https://logotyp.us/files/cleveland-cavaliers.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'DAL' &&
              <img src='https://logotyp.us/files/dallas-mavericks.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'DEN' &&
              <img src='https://logotyp.us/files/denver-nuggets.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'GSW' &&
              <img src='https://logowik.com/content/uploads/images/605_golden_state.jpg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'HOU' &&
              <img src='https://logotyp.us/files/houston-rockets.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'IND' &&
              <img src='https://logotyp.us/files/indiana-pacers.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'LAC' &&
              <img src='https://logowik.com/content/uploads/images/la-clippers7166.jpg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'LAL' &&
              <img src='https://logotyp.us/files/los-angeles-lakers.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'MEM' &&
              <img src='https://logotyp.us/files/memphis-grizzlies.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'MIA' &&
              <img src='https://logotyp.us/files/miami-heat.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'MIL' &&
              <img src='https://logotyp.us/files/milwaukee-bucks.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'MIN' &&
              <img src='https://logotyp.us/files/timberwolves.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'NOP' &&
              <img src='https://logotyp.us/files/pelicans.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'NYK' &&
              <img src='https://logotyp.us/files/new-york-knicks.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'OKC' &&
              <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'ORL' &&
              <img src='https://logotyp.us/files/orlando-magic.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'PHI' &&
              <img src='https://logotyp.us/files/76ers.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'PHX' &&
              <img src='https://logotyp.us/files/phoenix-suns.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'POR' &&
              <img src='https://logotyp.us/files/portland-trail-blazers.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'SAC' &&
              <img src='https://logotyp.us/files/sacramento-kings.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'SAS' &&
              <img src='https://logotyp.us/files/spurs.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'TOR' &&
              <img src='https://logotyp.us/files/toronto-raptors.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'UTA' &&
              <img src='https://logotyp.us/files/utah-jazz.svg' alt={item.home_team.full_name}></img>}
            {item.home_team.abbreviation === 'WAS' &&
              <img src='https://logotyp.us/files/washington-wizards.svg' alt={item.home_team.full_name}></img>}
            <h2>{item.home_team.full_name}</h2>
          </div>
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
          <div className={item.time === '' ? 'match-time' : 'match-time active'}>
            <p>{item.status}</p>
            <p>{item.time}</p>
          </div>
        </div>

        <div className='flex inverse team'>
          <div>
            <small>{item.visitor_team.abbreviation}</small>
            {item.visitor_team.abbreviation === 'ATL' &&
              <img src='https://logotyp.us/files/atlanta-hawks.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'BKN' &&
              <img src='https://logotyp.us/files/brooklyn-nets.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'OKC' &&
              <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'BOS' &&
              <img src='https://logotyp.us/files/boston-celtics.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'CHA' &&
              <img src='https://www.pngfind.com/pngs/m/151-1517994_wikipedia-charlotte-bobcats-logo-png-transparent-png.png' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'CHI' &&
              <img src='https://logotyp.us/files/chicago-bulls.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'CLE' &&
              <img src='https://logotyp.us/files/cleveland-cavaliers.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'DAL' &&
              <img src='https://logotyp.us/files/dallas-mavericks.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'DEN' &&
              <img src='https://logotyp.us/files/denver-nuggets.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'GSW' &&
              <img src='https://logowik.com/content/uploads/images/605_golden_state.jpg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'HOU' &&
              <img src='https://logotyp.us/files/houston-rockets.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'IND' &&
              <img src='https://logotyp.us/files/indiana-pacers.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'LAC' &&
              <img src='https://logowik.com/content/uploads/images/la-clippers7166.jpg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'LAL' &&
              <img src='https://logotyp.us/files/los-angeles-lakers.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'MEM' &&
              <img src='https://logotyp.us/files/memphis-grizzlies.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'MIA' &&
              <img src='https://logotyp.us/files/miami-heat.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'MIL' &&
              <img src='https://logotyp.us/files/milwaukee-bucks.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'MIN' &&
              <img src='https://logotyp.us/files/timberwolves.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'NOP' &&
              <img src='https://logotyp.us/files/pelicans.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'NYK' &&
              <img src='https://logotyp.us/files/new-york-knicks.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'OKC' &&
              <img src='https://logotyp.us/files/oklahoma-city-thunder.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'ORL' &&
              <img src='https://logotyp.us/files/orlando-magic.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'PHI' &&
              <img src='https://logotyp.us/files/76ers.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'PHX' &&
              <img src='https://logotyp.us/files/phoenix-suns.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'POR' &&
              <img src='https://logotyp.us/files/portland-trail-blazers.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'SAC' &&
              <img src='https://logotyp.us/files/sacramento-kings.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'SAS' &&
              <img src='https://logotyp.us/files/spurs.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'TOR' &&
              <img src='https://logotyp.us/files/toronto-raptors.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'UTA' &&
              <img src='https://logotyp.us/files/utah-jazz.svg' alt={item.visitor_team.full_name}></img>}
            {item.visitor_team.abbreviation === 'WAS' &&
              <img src='https://logotyp.us/files/washington-wizards.svg' alt={item.visitor_team.full_name}></img>}
            <h2>{item.visitor_team.full_name}</h2>
          </div>
        </div>
      </section>
    </C.Container>
  )
}
