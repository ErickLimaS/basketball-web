import styled from 'styled-components'

export const Container = styled.div`

    .activeted{
        display: flex;
    }
    .deactiveted{
        display: none;
    }

    .month-score{
        width: 90vh;
        // width: min-width;
        color: #FFF;
        font-size: 2.2rem;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        cursor: pointer;

        :hover{
            > h3{
                background-color: #141414
            }
        }

        @media(max-width: 420px){
            width: 320px;
        }
        

        h3{
            margin-left: 2rem;
            font-weight: 400;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: space-around;
        }
        }

        h3.month-heading{
            padding: 2.5rem 0 2.5rem 2rem;
            background-color: #000;
            top: 0;
            margin: 0;
            position: sticky;
            border-radius: 10px 0 0 10px;

            @media(max-width: 940px){
                border-radius: 10px;
            }
        }
        
        .scores{
            align-items: center;
            flex-direction: column;
            
        }

        div {
            
            div{
            
            }
        }
        img {
            width: 15rem;
        }
    }

   

`