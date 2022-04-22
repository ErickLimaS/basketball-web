import { useEffect, useState } from 'react';
import React from 'react'
import * as C from './styles'
import API from '../../api/BasketApiBallDontLie';
import TodaysMatchs from '../../components/Home/TodaysMatchs/TodaysMatchs';
import YesterdayHighlights from '../../components/Home/YesterdayHighlights/YesterdayHighlights';

export default function Home() {
    // const [teams, setTeams] = useState([])
    const [gamesToday, setGamesToday] = useState([])
    const [gamesYesterday, setGamesYesterday] = useState([])

    useEffect(() => {
        const today = async () => {

            const { data } = await API.GamesToday();
            setGamesToday(data)
        }
        today()
        const yesterday = async () => {

            const { data } = await API.GamesFromYesterday();
            setGamesYesterday(data)
        }
        yesterday()

    }, [])


    console.log(gamesYesterday)
    return (
        <C.Container>
            <div className='image-cover'>
                <div className='flex'>
                    <div className='today-matchs'>
                        <h2>Partidas de Hoje</h2>
                        {gamesToday.map((item, key) => (
                            <TodaysMatchs item={item} key={key} />
                        ))}

                    </div>
                    <div className='header-title'>
                        <h1>Acompanhe os jogos, as estatisticas e os jogadores do momento aqui.</h1>
                    </div>
                </div>
                <small>Photo by <a href='https://pixabay.com/users/vityuk-lena-6431541/' target='_blank' rel='noreferrer'>vityuk-lena</a></small>
            </div>
            <div className='yesterday-highlight-games'>
                <h2>Destaques das últimas partidas</h2>
                <div className='previous-games' style={{
                    'display': 'flex',
                'flex-direction': 'row'
                }}>
                {gamesYesterday.map((item, key) => (
                    <YesterdayHighlights item={item} key={key} />
                ))}
            </div>

        </div>
        </C.Container >
    )
}
