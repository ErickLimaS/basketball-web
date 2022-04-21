import React from 'react'
import * as C from './styles'
import logo from '../../../img/logos/nba-logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <C.Container>
            <div className='logo-name'>
                <img src={logo} alt='NBA Report Logo' />
                <h1>NBA Report</h1>
            </div>
            <div>
                <nav>
                    <Link to='#'>About my Team</Link>
                    <Link to='#'>Statistics</Link>
                    <Link to='#'>Match Results</Link>
                </nav>
            </div>
        </C.Container>
    )
}
