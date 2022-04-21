import React from 'react'
import * as C from './styles'

export default function Footer() {
    return (
        <C.Container>
            <div className='about'>
                <ul>
                    <li><a href='#'>Sobre</a></li>
                    <li><a href='#'>GitHub</a></li>
                    <li><a href='#'>API Usada</a></li>
                </ul>
            </div>
            <hr />
            <div className='disclaimer'>
                Informações usadas apenas para estudos. Todos os direitos reservados para seus respectivos donos.
            </div>
        </C.Container>
    )
}
