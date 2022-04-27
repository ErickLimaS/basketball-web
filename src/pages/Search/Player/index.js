import React, { useEffect, useState } from 'react'
import * as C from './styles'
import API from '../../../api/BasketApiBallDontLie'
import { Link } from 'react-router-dom'
import playerImage from '../../../img/players/player2.png'

export default function Player() {

    const [isFetch, setIsFetch] = useState(false)
    const [inputSearch, setInputSearch] = useState()
    const [allPlayers, setAllPlayers] = useState([])
    const [searchedPlayer, setSearchedPlayer] = useState([])

    useEffect(() => {

        const getPlayer = async (player) => {

            const load1 = async () => {
                const { data } = await API.EveryBasketPlayer()

                setAllPlayers(data)
            }
            load1()
            const load2 = async () => {
                const { data } = await API.SpecificBasketPlayer(player)

                setSearchedPlayer(data)
            }
            load2()
        }
        getPlayer(inputSearch)
        setIsFetch(false)
    }, [isFetch])

    console.log(allPlayers)
    console.log(searchedPlayer)

    return (
        <C.Container>
            <div className='input-search-area'>
                <div className='first-content'>
                    <div className='heading-text'>
                        <h1>Search your Player</h1>
                        <h2>Write the name of the player you want</h2>
                    </div>
                    <div className='input-search'>
                        <label htmlFor='search'>Player Name</label>
                        <div>
                            <input type='text'
                                id='search'
                                placeholder='James Harden'
                                value={inputSearch}
                                onChange={(e) => {
                                    setInputSearch(e.target.value)
                                }}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        setIsFetch(true)
                                    }
                                }}
                            ></input>
                            <a href='#results'>
                                <button type='button'
                                    onClick={() => { setIsFetch(true) }}

                                >Search</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='results-to' id='results'>
                {inputSearch !== undefined ? (
                    <h2>Results to {inputSearch}</h2>
                ) : (
                    <h2>Results to All Players</h2>
                )}
            </div>
            <div className='players-list'>
                {searchedPlayer == '' ?
                    (
                        allPlayers.map((item, key) => (
                            <div className='player'>
                                <Link to={`/player/${item.id}`}>
                                    <div key={key} className='player-info-img'>
                                        <div className='player-img'>
                                            <img src={playerImage} alt={item.first_name}></img>
                                        </div>
                                        <div className='player-info'>
                                            <h3>{item.first_name} {item.last_name}</h3>
                                            <h4>Position: {item.position}</h4>
                                        </div>
                                    </div>
                                    <div className='player-team'>
                                        <Link to={`/team/${item.team.id}`}>
                                            <h5>{item.team.full_name}</h5>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        searchedPlayer.map((item, key) => (
                            <div className='player'>
                                <Link to={`/player/${item.id}`}>
                                    <div key={key} className='player-info-img'>
                                        <div className='player-img'>
                                            <img src={playerImage} alt={item.first_name}></img>
                                        </div>
                                        <div className='player-info'>
                                            <h3>{item.first_name} {item.last_name}</h3>
                                            <h4>Position: {item.position}</h4>
                                        </div>
                                    </div>
                                    <div className='player-team'>
                                        <Link to={`/team/${item.team.id}`}>
                                            <h5>{item.team.full_name}</h5>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )
                }
            </div>

        </C.Container >
    )
}
