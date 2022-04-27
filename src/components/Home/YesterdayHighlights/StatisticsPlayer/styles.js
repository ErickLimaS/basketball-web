import styled from 'styled-components'

export const Container = styled.div`

    margin: 1rem 0;
    font-weight: 400;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 400;
    width: 100%;

    .player-stats{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .name-and-position {
        background-color: rgba(0, 0, 0, 0.8);
        color: #FFF;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        border: 1px solid black;

        :hover{
            background-color: rgba(250,250,250);
            color: #000;
        }

        h3{
            font-weight: 600;
        }

    }

    .numbers {
        display: flex;
        flex-direction: row;
        border: 1px solid #000;

        @media(max-width: 760px){
            display: none;
            margin: 1rem;
        }
        
        
        div {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .bold{
            font-weight: 600;
        }
    }
    
    .inverse{
        flex-direction: row-reverse;
    }

    .name{
        @media(max-width: 320px){
            width:100%;
        }
    }
`