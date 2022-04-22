import React from 'react'
import * as C from './styles'

export default function StatisticsPlayer(item) {
    console.log(item)

    if (item.team1) {
        return (
            <C.Container>
                <div className='name-and-position'>
                    <div>
                        <h3>{item.team1.player.first_name} {item.team1.player.last_name}</h3>
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        <h3>Position: {item.team1.player.position}</h3>
                    </div>
                </div>
            </C.Container >
        )
    }
    else if (item.team2) {
        return (
            <C.Container>
                <div className='name-and-position'>
                    <div>
                        <h3>{item.team2.player.first_name} {item.team2.player.last_name}</h3>
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        <h3>Position: {item.team2.player.position}</h3>
                    </div>
                </div>
            </C.Container>
        )
    }
    else {
        <p>Not Working</p>
    }

}
