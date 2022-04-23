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
    const [btnClick, setBtnClick] = useState(0)

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

    const initialId = gamesYesterday[0]

    const showNextGameScore = (btnClick) => {
        const idAux = gamesYesterday[btnClick]
        console.log(idAux)
        let previousId = idAux.id
        previousId--
        console.log(btnClick)
        let elementId = document.getElementById(idAux.id).id
        console.log(elementId)

        if (initialId !== elementId) {
            document.getElementById(idAux.id).style.display = "block";
            setBtnClick(+1)
            document.getElementById(previousId).style.display = "none";
        }
        else if (btnClick > gamesYesterday.lenght ) {
            setBtnClick(0)
            document.getElementById(gamesYesterday[0].id
            ).style.display = "block";
            document.getElementById(gamesYesterday[gamesYesterday.lenght].id
            ).style.display = "none";
        }
        else {
            setBtnClick(+1)
        }
    }

    const showPreviousGameScore = (i) => {
        let idAux
        let previousId

        console.log(i)
        let elementId = document.getElementById(idAux.id).id
        console.log(previousId)
        console.log(elementId)
        console.log(idAux)

        if (initialId !== elementId) {
            
            document.getElementById(idAux.id).style.display = "none";
            setBtnClick(-1)
            document.getElementById(previousId).style.display = "block";
            console.log(previousId)
            console.log(elementId)
            console.log(idAux)
            if (previousId < initialId) {
                previousId = initialId
            }
        }
        else if (previousId < initialId) {
            previousId = initialId
            console.log(previousId)
            console.log(elementId)
            console.log(idAux)
        }
        else if (btnClick < 0) {
            setBtnClick(0)
            console.log(previousId)
            console.log(elementId)
            console.log(idAux)
        }
        else {
            if (i >= 0) {
                idAux = gamesYesterday[i]
            }
            else {
                idAux = gamesYesterday[0]
            }

            if (idAux.id - 1 > initialId) {
                previousId = idAux.id
                previousId--
            }
            else {
                previousId = initialId
            }
            console.log(previousId)
            console.log(elementId)
            console.log(idAux)
        }
    }

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
                <h2>Destaques das Últimas Partidas</h2>
                <div className='flex-2'>
                    <div className='buttons'>
                        <button type='button' onClick={() => {
                            showPreviousGameScore(btnClick)
                        }}>{'<'}</button>
                        <button type='button' onClick={() => {
                            showNextGameScore(btnClick)
                        }}>{'>'}</button>
                    </div>
                    <p>{btnClick +1} de {gamesYesterday.length}</p>
                    <div className='previous-games'>

                        {gamesYesterday.map((item, key) => (
                            <YesterdayHighlights item={item} key={key} />
                        ))}
                    </div>


                </div>
            </div>
        </C.Container >
    )
}
