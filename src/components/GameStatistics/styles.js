import styled from 'styled-components'

export const Container = styled.div`
    color: #FFF;

    .player-stats{
        display: flex;
        flex-direction: row;
        background-color: rgba(0,0,0,.75);
        padding: 0.5rem;

        @media(max-width: 900px){
            flex-direction: column;

            .name-and-position{
                display: flex;
                justify-content: center;
            }
        }
    }

    .name-and-position{
        margin: 1rem;
        color: #000;

        div{
            width: 30vh;
            padding: 0.5rem 1rem;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    }

    .numbers{
        display: flex;
        flex-direction: row;
        font-size: 1.6rem;
        overflow: auto;

        ::-webkit-scrollbar {
            height: 5px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1; 
          }
           
          ::-webkit-scrollbar-thumb {
            background: #888; 
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }

        div{
            display: flex;
            flex-direction: column;
            margin: 0 1rem;
            align-items: center;
            justify-content: center;

            span:first-child{
                font-weight: 600;
            }

            *{ 
                width: 10vh;
                padding: 0.2rem;
                display: flex;
                flex-direction: column;
                align-items: center;

            }

        }

    }

    .player-stats.inverse{
        display: flex;
        flex-direction: row-reverse;
        border-right: 1px solid #fff;

        @media(max-width: 900px){
            flex-direction: column;
        }
    }

`