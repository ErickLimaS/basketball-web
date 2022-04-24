import styled from 'styled-components'

export const Container = styled.div`
    color: #000;
    display: flex;
    margin: 1.2rem 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    height: 100%;


    a{
        font-size: 1.2rem;

        h2{
            margin: 0;
           font-weight: 600;
        }
    }

    .flex{
        display: flex;
        align-items:center;
        
    }
    .flex-2{
        display: flex;
        align-items:center;
        flex-direction: column;
        justify-content: center;
    }

    .team {
        margin: 0.5rem 1rem;
        width: 40%;
    }

    .score-and-teams{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(250,250,250, 0.9);
        border-radius: 8px;
        width: 80vh;
        height: 25vh;

        :hover{
            background-color: rgba(250,250,250, 1);
        }
    }
    
    .team-home-visitant{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    
        img{
        }

        .img-not-svg{
            width: 50%;
        }
    }

    .status{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .match-results{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .versus {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div{
                    display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                }
            }
            .score{
                padding: 1rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 3rem;

                h3{
                    margin: 0;
                }
            }
        }
    }

`