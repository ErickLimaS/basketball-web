import styled from 'styled-components'

export const Container = styled.div`

    

    .player-info{
        height: 80vh;
        display: flex;
        flex-direction: row;
        color: #FFF;

        @media(max-width: 726px){
            height: initial;
            display: flex;
            flex-direction: column;

        }


        div.img{
            padding: 2rem;
            background-color: rgba(0,0,0,.9);
            
            width: 30%;
            @media(max-width: 726px){
                height: 50vh;
                width: fit-content;
                display: flex;
                justify-content: center;

                img{
                    width: 35%!important;
                }
            }

            @media(max-width: 426px){
                width: fit-content;
                display: flex;
                justify-content: center;

                img{
                    width: fit-content;
                    width: 80%!important;
                }
            }

            @media(max-width: 1365px){
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img{
                width: 80%;
            }
        }

        .info{
            padding: 2rem;   
            background-color: rgba(0,0,0,.9);
            width: 45%;

            @media(max-width: 426px){
                width: 100%;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

            }

            @media(max-width: 726px){
                width: 100%;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

            }

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

            @media(max-width: 826px){
                width: inherit;
                padding: 1rem;
            }
            
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