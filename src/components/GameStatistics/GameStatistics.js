import React from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles'

export default function GameStatistics(item) {

    if (item.team1) {
        return (
            <C.Container>
                <div className='player-stats'>

                    <div className='name-and-position'>
                        <div>
                            <Link to={`player?${item.team1.id}`}><h3>{item.team1.player.first_name} {item.team1.player.last_name}  {item.team1.player.position && `| ${item.team1.player.position}`}</h3></Link>
                        </div>
                    </div>
                    <div className='numbers'>
                        <div>
                            <span className='bold'>Points</span>
                            <span className='bold'>{item.team1.pts}</span>
                        </div>
                        <div>
                            <span>Assists</span>
                            <span>{item.team1.ast}</span>
                        </div>
                        <div>
                            <span>Steals</span>
                            <span>{item.team1.stl}</span>
                        </div>
                        <div>
                            <span>Blocks</span>
                            <span>{item.team1.blk}</span>
                        </div>
                        <div>
                            <span>Turnovers</span>
                            <span>{item.team1.turnover}</span>
                        </div>
                        <div>
                            <span>Offensive Rebound</span>
                            <span>{item.team1.oreb}</span>
                        </div>
                        <div>
                            <span>Defensive Rebound</span>
                            <span>{item.team1.dreb}</span>
                        </div>
                        <div>
                            <span>Minutes</span>
                            <span>{item.team1.min}</span>
                        </div>
                        <div>
                            <span>3Pt. Made</span>
                            <span>{item.team1.fg3m}</span>
                        </div>
                        <div>
                            <span>3Pt. Attempt</span>
                            <span>{item.team1.fg3a}</span>
                        </div>
                        <div>
                            <span>3Pt. %</span>
                            <span>{item.team1.fg3_pct} %</span>
                        </div>
                        <div>
                            <span>FT Made</span>
                            <span>{item.team1.ftm}</span>
                        </div>
                        <div>
                            <span>FT Attempt</span>
                            <span>{item.team1.fta}</span>
                        </div>
                        <div>
                            <span>FG Made</span>
                            <span>{item.team1.fgm}</span>
                        </div>
                        <div>
                            <span>FG Attempt</span>
                            <span>{item.team1.fga}</span>
                        </div>
                        <div>
                            <span>FG %</span>
                            <span>{item.team1.fg_pct} %</span>
                        </div>
                    </div>
                </div>

            </C.Container >
        )
    }
    else if (item.team2) {
        return (
            <C.Container>
                <div className='player-stats inverse'>

                    <div className='name-and-position'>
                        <div>
                            <Link to={`player?${item.team2.id}`}>
                                <h3>{item.team2.player.first_name} {item.team2.player.last_name} | {item.team2.player.position}</h3>
                            </Link>
                        </div>
                    </div>
                    <div className='numbers'>
                        <div>
                            <span className='bold'>Points</span>
                            <span className='bold'>{item.team2.pts}</span>
                        </div>
                        <div>
                            <span>Assists</span>
                            <span>{item.team2.ast}</span>
                        </div>
                        <div>
                            <span>Steals</span>
                            <span>{item.team2.stl}</span>
                        </div>
                        <div>
                            <span>Blocks</span>
                            <span>{item.team2.blk}</span>
                        </div>
                        <div>
                            <span>Turnovers</span>
                            <span>{item.team2.turnover}</span>
                        </div>
                        <div>
                            <span>Offensive Rebound</span>
                            <span>{item.team2.oreb}</span>
                        </div>
                        <div>
                            <span>Defensive Rebound</span>
                            <span>{item.team2.dreb}</span>
                        </div>
                        <div>
                            <span>Minutes</span>
                            <span>{item.team2.min}</span>
                        </div>
                        <div>
                            <span>3Pt. Made</span>
                            <span>{item.team2.fg3m}</span>
                        </div>
                        <div>
                            <span>3Pt. Attempt</span>
                            <span>{item.team2.fg3a}</span>
                        </div>
                        <div>
                            <span>3Pt. %</span>
                            <span>{item.team2.fg3_pct} %</span>
                        </div>
                        <div>
                            <span>FT Made</span>
                            <span>{item.team2.ftm}</span>
                        </div>
                        <div>
                            <span>FT Attempt</span>
                            <span>{item.team2.fta}</span>
                        </div>
                        <div>
                            <span>FG Made</span>
                            <span>{item.team2.fgm}</span>
                        </div>
                        <div>
                            <span>FG Attempt</span>
                            <span>{item.team2.fga}</span>
                        </div>
                        <div>
                            <span>FG %</span>
                            <span>{item.team2.fg_pct} %</span>
                        </div>
                    </div>
                </div>
            </C.Container>
        )
    }
    else {
        <p>Not Working</p>
    }

}
