import React from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles'

export default function StatisticsPlayer(item) {
    // console.log(item)

    if (item.team1) {
        return (
            <C.Container>
                <div className='player-stats'>

                    <div className='name-and-position'>
                        <div>
                            <Link to={`player/${item.team1.player.id}`}><h3>{item.team1.player.first_name} {item.team1.player.last_name}  {item.team1.player.position && `| ${item.team1.player.position}`}</h3></Link>
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
                            <span>Blocks</span>
                            <span>{item.team1.blk}</span>
                        </div>
                        <div>
                            <span>Turnovers</span>
                            <span>{item.team1.turnover}</span>
                        </div>
                        <div>
                            <span>Minutes</span>
                            <span>{item.team1.min}</span>
                        </div>
                    </div>
                </div>

            </C.Container >
        )
    }
    else if (item.team2) {
        return (
            <C.Container>
                <div className='player-stats'>
                    <div className='numbers  inverse'>
                        <div>
                            <span className='bold'>Points</span>
                            <span className='bold'>{item.team2.pts}</span>
                        </div>
                        <div>
                            <span>Assists</span>
                            <span>{item.team2.ast}</span>
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
                            <span>Minutes</span>
                            <span>{item.team2.min}</span>
                        </div>
                    </div>
                    <div className='name-and-position'>
                        <div>
                            <Link to={`player/${item.team2.player.id}`}><h3>{item.team2.player.first_name} {item.team2.player.last_name} | {item.team2.player.position}</h3></Link>
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
