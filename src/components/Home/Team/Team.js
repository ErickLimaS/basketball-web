import React from 'react'
import { Link } from 'react-router-dom';
import * as C from './styles'

export default function Team({ item }) {



    let logo;
    if (Number.parseInt(item.id) === 1) {
        logo = 'https://logotyp.us/files/atlanta-hawks.svg'
    }
    else if (Number.parseInt(item.id) === 2) {
        logo = 'https://logotyp.us/files/boston-celtics.svg'
    }
    else if (Number.parseInt(item.id) === 3) {
        logo = 'https://logotyp.us/files/brooklyn-nets.svg'
    }
    else if (Number.parseInt(item.id) === 4) {
        logo = 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg'
    }
    else if (Number.parseInt(item.id) === 5) {
        logo = 'https://logotyp.us/files/chicago-bulls.svg'
    }
    else if (Number.parseInt(item.id) === 6) {
        logo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(item.id) === 7) {
        logo = 'https://logotyp.us/files/cleveland-cavaliers.svg'
    }
    else if (Number.parseInt(item.id) === 8) {
        logo = 'https://logotyp.us/files/dallas-mavericks.svg'
    }
    else if (Number.parseInt(item.id) === 9) {
        logo = 'https://logotyp.us/files/denver-nuggets.svg'
    }
    else if (Number.parseInt(item.id) === 10) {
        logo = 'https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg'
    }
    else if (Number.parseInt(item.id) === 11) {
        logo = 'https://logotyp.us/files/houston-rockets.svg'
    }
    else if (Number.parseInt(item.id) === 12) {
        logo = 'https://logotyp.us/files/indiana-pacers.svg'
    }
    else if (Number.parseInt(item.id) === 13) {
        logo = 'https://logowik.com/content/uploads/images/la-clippers7166.jpg'
    }
    else if (Number.parseInt(item.id) === 14) {
        logo = 'https://logotyp.us/files/los-angeles-lakers.svg'
    }
    else if (Number.parseInt(item.id) === 15) {
        logo = 'https://logotyp.us/files/memphis-grizzlies.svg'
    }
    else if (Number.parseInt(item.id) === 16) {
        logo = 'https://logotyp.us/files/miami-heat.svg'
    }
    else if (Number.parseInt(item.id) === 17) {
        logo = 'https://logotyp.us/files/milwaukee-bucks.svg'
    }
    else if (Number.parseInt(item.id) === 18) {
        logo = 'https://logotyp.us/files/timberwolves.svg'
    }
    else if (Number.parseInt(item.id) === 19) {
        logo = 'https://logotyp.us/files/pelicans.svg'
    }
    else if (Number.parseInt(item.id) === 20) {
        logo = 'https://logotyp.us/files/new-york-knicks.svg'
    }
    else if (Number.parseInt(item.id) === 21) {
        logo = 'https://logotyp.us/files/oklahoma-city-thunder.svg'
    }
    else if (Number.parseInt(item.id) === 22) {
        logo = 'https://logotyp.us/files/orlando-magic.svg'
    }
    else if (Number.parseInt(item.id) === 23) {
        logo = 'https://logotyp.us/files/76ers.svg'
    }
    else if (Number.parseInt(item.id) === 24) {
        logo = 'https://logotyp.us/files/phoenix-suns.svg'
    }
    else if (Number.parseInt(item.id) === 25) {
        logo = 'https://logotyp.us/files/portland-trail-blazers.svg'
    }
    else if (Number.parseInt(item.id) === 26) {
        logo = 'https://logotyp.us/files/sacramento-kings.svg'
    }
    else if (Number.parseInt(item.id) === 27) {
        logo = 'https://logotyp.us/files/spurs.svg'
    }
    else if (Number.parseInt(item.id) === 28) {
        logo = 'https://logotyp.us/files/toronto-raptors.svg'
    }
    else if (Number.parseInt(item.id) === 29) {
        logo = 'https://logotyp.us/files/utah-jazz.svg'
    }
    else if (Number.parseInt(item.id) === 30) {
        logo = 'https://logotyp.us/files/washington-wizards.svg'
    }


    return (
        <C.Container>

            <div className='team'>
                <Link to={`/team/${item.id}`}>
                    <img className={item.id === 10 || item.id === 13 || item.id === 4 ? 'img-other-sources': ''} src={logo} alt={item.full_name} />
                </Link>
            </div>
        </C.Container>
    )
}
