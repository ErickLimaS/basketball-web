import React from 'react'
import * as C from './styles'
import logo from '../../../img/logos/nba-logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <C.Container>
            <div className='logo-name'>
                <a className='a-tag-not-affect' href='/'>
                    <img src={logo} alt='NBA Report Logo' />
                    <h1>NBA Report</h1>
                </a>
            </div>
            <div className='nav-links'>
                <nav>
                    <Link to='/search/player'>Search Player</Link>
                </nav>
            </div>
        </C.Container>
    )
}
