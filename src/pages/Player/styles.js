import styled from 'styled-components'

export const Container = styled.div`

    .player-info{

        display: flex;
        flex-direction: row;
        color: #FFF;

        div.img{
            padding: 2rem;
            background-color: rgba(0,0,0,.9);
            
            width: 30%;

            img{
                width: 80%;
            }
        }

        

        .info{
            padding: 2rem;   
            background-color: rgba(0,0,0,.9);
            width: 45%;

            *{
                font-weight: 200;
            }
            
            div{
                padding: 1rem 0;

                h1{
                    font-weight: 600;
                }

                .team-name{
                    width: max-content;
                    font-size: 2rem;
                    font-weight: 400;
                    color: rgba(250,250,250,.7);
                    border-bottom: 1px solid rgba(250,250,250,.7);

                    

                    :hover{
                        color: rgba(250,250,250);
                        border-bottom: 1px solid rgba(250,250,250);
                    }
                }
            }
        }

        .last-game-stats{
            width: 25%;
            background-color: rgba(0,0,0,.9);
            
            *{
                font-weight: 600;
            }

            h2{
                font-weight: 400;
            }

            h3{
            }

            a h4{
                width: max-content;
                color: rgba(250,250,250,.7);
                border-bottom: 1px solid rgba(250,250,250,.7);

                :hover{
                    color: rgba(250,250,250);
                    border-bottom: 1px solid rgba(250,250,250);
                }
            }
            
            ul{
                list-style: none;
                padding: 1rem;

                li{
                    padding: 0.2rem 0.5rem;
                    border-bottom: 1px solid rgba(250,250,250,.2);
                    width: 90%;

                    span{
                        font-weight: 600;
                    }
                }
            }
        }
    }

`