import React from 'react'
import * as C from './styles'

export default function Footer() {
    return (
        <C.Container>
            <div className='about'>
                <ul>
                    <li><a href='/sobre'>Sobre</a></li>
                    <li><a href='https://github.com/ErickLimaS'>GitHub</a></li>
                    <li><a href='https://www.balldontlie.io/'>API Usada</a></li>
                </ul>
            </div>
            <div className='disclaimer'>
                Informações usadas apenas para estudos. Todos os direitos reservados para seus respectivos donos.
            </div>
        </C.Container>
    )
}
