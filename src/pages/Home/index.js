import { useEffect, useState } from 'react';
import React from 'react'
import * as C from './styles'
import API from '../../api/BasketApiBallDontLie';
import HomePageGames from '../../components/HomeComponents/HomePageGames';

export default function Home() {
    // const [teams, setTeams] = useState([])
    const [gamesToday, setGamesToday] = useState([])

    useEffect(() => {
        const homeInfo = async () => {
            const { data } = await API.GamesToday();
            setGamesToday(data)
        }
        homeInfo()
    }, [])

    console.log(gamesToday)
    return (

        <C.Container>
            <h2>Partidas de Hoje</h2>
            {gamesToday.map((item, key) => (
                <HomePageGames item={item} key={key} />
            ))}

        </C.Container>
    )
}
