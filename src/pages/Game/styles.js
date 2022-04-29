import styled from 'styled-components'

export const Container = styled.div`
    
    .teams-names{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(max-width: 900px){
            h3{
                display: none;
            }
        }

        h2{
            font-size: 3rem;
        }
        h3{
            font-size: 2rem;
        }
    }

    .players-statistics{
        width: 100%;
        display: flex;

        h3{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @media(max-width: 900px){
            flex-direction: column;
        }

        .team-img{
            width: 50%;

            @media(max-width: 900px){
                width: initial;
            }
        }
    }
    
    
`