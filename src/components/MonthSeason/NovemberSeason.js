import React, { useEffect, useState } from 'react'
import * as C from './styles'
import API from '../../api/BasketApiBallDontLie'
import GameScore from '../GameScore/GameScore'
import { ReactComponent as SvgCaretDown } from '../../img/svg/caret-down.svg'
import { ReactComponent as SvgCaretUp } from '../../img/svg/caret-up.svg'

export default function NovemberSeason(item) {
    const [auxClick, setAuxClick] = useState(false)
    const [monthSeason, setMonthSeason] = useState([])

    const season = item.season
    const id = item.id

    useEffect(() => {
        const load = async () => {
            const { data } = await API.GetSelectSeasonNovember(season, id)
            setMonthSeason(data)
        }
        load()
        let windowWidth = window.matchMedia("(min-width: 940px)")
        const checkWindowWidth = (data) => {
            if (data.matches) {
                setAuxClick(true)
            }
        }
        checkWindowWidth(windowWidth)
    }, [id, season])
    return (
        <C.Container>
            <div className='month-score'>
                <h3 className='month-heading' 
                onClick={() => { setAuxClick(!auxClick) }}>November/{season}
                    <span>
                        <SvgCaretDown className={auxClick === true ? 'deactiveted' : 'activeted'} fill='#FFF' height={25} width={25} />
                        <SvgCaretUp className={auxClick === true ? 'activeted' : 'deactiveted'} fill='#FFF' height={25} width={25} />
                    </span>
                </h3>
                <div className={auxClick === true ? 'scores activeted' : 'scores deactiveted'}>
                    {monthSeason.map((item, key) => (
                        <GameScore item={item} key={key} />
                    ))}
                    {monthSeason.length === 0 && <h3 style={{ 'width': '200px', 'margin': '2rem' }}>No Games</h3>}
                </div>
            </div>
        </C.Container >
    )
}
