import styled from 'styled-components'

export const Container = styled.div`
    color: #000;
    display: flex;
    width: 450px;
    height: 160px;
    margin: 2.6rem 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    @media(max-width: 1220px){
        width: initial;
        height: initial;
        margin: 2.6rem 2rem;
    }

    a{
        color: #000!important;

     }
     
    section {
        color: #000;
        background-color: #ffffffd1;
        border-radius: 10px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }

    .flex{
        display: flex;
        align-items:center;
    }

    .team {
        margin: 0.5rem 1rem;
        width: 40%;
    }

    .status {
        width: 20%;
    }

    .status * {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .status .score-results div{
        margin: 0 2rem;
    }

    .match-time{
        flex-direction: column;
        border-radius: 4px;

        p{
            margin: 0;
        }
    }

    .active{
        flex-direction: column;
        background-color: #FFF;
        border-radius: 4px;

        p{
            color: green;
            margin: 0;
        }
    }

    .inverse{
        flex-direction: row-reverse;
    }

    img {
        height: 80px;
        width: 100%;
    }

    .team-home-visitant{
        display: flex;
        flex-direction: column;
    }

    .img-from-other-links-tweaks{
        align-self: center;
        width: initial;
    }

    h2 {
        font-size: 2rem;
        font-weight: 400!important;
        margin: 1rem;
    }

    .score h3{
        font-size: 3rem;
        font-weight: 500;
    }

    div.deactiveted{
        display: none;
    }
`