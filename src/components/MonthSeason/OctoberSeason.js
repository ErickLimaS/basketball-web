import React, { useEffect, useState } from 'react'
import * as C from './styles'
import API from '../../api/BasketApiBallDontLie'
import GameScore from '../GameScore/GameScore'

export default function OctoberSeason(item) {
    const [monthSeason, setMonthSeason] = useState([])

    const season = item.season
    const id = item.id

    useEffect(() => {
        const load = async () => {
            const { data } = await API.GetSelectSeasonOctober(season, id)
            setMonthSeason(data)
        }
        load()
    }, [id, season])
    return (
        <C.Container>
            <div className='month-score'>
                <h3 className='month-heading'>October/{season}</h3>
                <div className='scores'>
                    {monthSeason.map((item, key) => (
                        <GameScore item={item} key={key} />
                    ))}
                    {monthSeason.length === 0 && <h3 style={{'width': '200px','margin' : '2rem'}}>No Games</h3>}
                </div>
            </div>
        </C.Container>
    )
}
