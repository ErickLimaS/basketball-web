import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FF5733;
    color: #FFF;

    a {
        color: #FFF;
    }

    h1 {
        font-size: 2.2rem;
    }

    div{
        display: flex;
    }

    div nav{
        padding: 2rem;

        * {
            padding: 1rem;
            margin: 0 1rem;
        }
    }

    .logo-name{
        display:flex;
        align-items: center;
    }

    img{
        height: 4.5rem;
    }
`