import { useEffect, useState } from 'react';
import React from 'react'
import * as C from './styles'
import API from '../../api/BasketApiBallDontLie';
import TodaysMatchs from '../../components/Home/TodaysMatchs/TodaysMatchs';
import YesterdayHighlights from '../../components/Home/YesterdayHighlights/YesterdayHighlights';
import Team from '../../components/Home/Team/Team';

export default function Home() {
    const [gamesToday, setGamesToday] = useState([])
    const [gamesYesterday, setGamesYesterday] = useState([])
    const [teams, setTeams] = useState([])
    const [btnClick, setBtnClick] = useState(1)

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
        const load3 = async () => {
            const { data } = await API.GetBasketTeams()

            setTeams(data)
        }
        load3()

    }, [])

    const initialId = gamesYesterday[0]

    const showNextGameScore = (btnClick) => {
        const gamesLength = gamesYesterday.length - 1
        // console.log(gamesLength)

        if (btnClick > gamesLength) {
            // console.log('foi')
            setBtnClick(1)
            document.getElementById(gamesYesterday[gamesLength].id
            ).style.display = "none";
            document.getElementById(gamesYesterday[0].id
            ).style.display = "block";

        }
        else {
            const idAux = gamesYesterday[btnClick]
            // console.log(idAux)
            let previousId = idAux.id
            previousId--
            // console.log(previousId)

            // console.log(btnClick)
            let nextId = document.getElementById(idAux.id).id
            // console.log(nextId)

            if (initialId < nextId || initialId !== nextId) {
                document.getElementById(previousId).style.display = "none";
                document.getElementById(idAux.id).style.display = "block";
                setBtnClick(btnClick + 1)
            }
        }
    }

    const showPreviousGameScore = (i) => {
        const gamesLength = gamesYesterday.length - 1
        // console.log(gamesLength)
        // console.log(btnClick)

        if (btnClick < 1) {

            setBtnClick(btnClick + 1)
            // console.log('if')
            setBtnClick(gamesLength)
            document.getElementById(gamesYesterday[btnClick].id
            ).style.display = "none";
            document.getElementById(gamesYesterday[gamesLength].id
            ).style.display = "block";
        }
        else {
            setBtnClick(btnClick - 1)
            // console.log('else')
            document.getElementById(gamesYesterday[btnClick].id
            ).style.display = "none";
            document.getElementById(gamesYesterday[btnClick - 1].id
            ).style.display = "block";

        }
    }

    return (
        <C.Container>
            <div className='image-cover'>
                <div className='flex'>
                    <div className='today-matchs'>
                        <h2 style={{ 'color': '#FFF' }}>Partidas de Hoje</h2>
                        {gamesToday.map((item, key) => (
                            <TodaysMatchs item={item} key={key} />
                        ))}

                    </div>
                    <div className='header-title'>
                        <h1>Acompanhe os jogos, as estatísticas e os jogadores do momento aqui.</h1>
                    </div>
                </div>
                <small>Photo by <a href='https://pixabay.com/users/vityuk-lena-6431541/' target='_blank' rel='noreferrer'>vityuk-lena</a></small>
            </div>

            <div className='teams'>
                <h3>See What Games Your Team Played This Season</h3>
                <div className='keyframe-teams'>
                    {teams.map((item, key) => (
                        <Team item={item} key={key} />
                    ))}
                </div>
            </div>

            <div className='yesterday-highlight-games'>
                {gamesYesterday.length === 0 ? (<h2>There Were No Games Yesterday To Display</h2>) :
                    (<>
                        <h2>Yesterday Highlights</h2>
                        <div className='flex-2'>
                            <div className='buttons'>
                                <button type='button' onClick={() => {
                                    showPreviousGameScore(btnClick)
                                }}>{'<'}</button>
                                <button type='button' onClick={() => {
                                    showNextGameScore(btnClick)
                                }}>{'>'}</button>
                            </div>
                            <p>{btnClick} de {gamesYesterday.length}</p>
                            <div className='previous-games'>
                                {console.log(gamesYesterday)}
                                {gamesYesterday.map((item, key) => (
                                    <YesterdayHighlights item={item} key={key} />
                                ))}
                            </div>
                        </div>
                    </>
                    )}
            </div>
        </C.Container >
    )
}
