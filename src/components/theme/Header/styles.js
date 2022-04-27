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
        text-decoration: none;
        
        :hover{
            color: #e3e3e3;
        }
    }

    a.a-tag-not-affect{
        align-items: center;
        display: flex;
        
        :hover{
            color: #FFF;
        }
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

        @media(max-width: 360px){
            padding: 0rem;
        }
    }

    .logo-name{
        display:flex;
        align-items: center;
    }

    .nav-links{
        right: -13rem;
        position: relative;

        @media(max-width: 760px){
            right: 0;
        }
    }

    img{
        height: 4.5rem;
    }

    .sticky{
       
    }

`