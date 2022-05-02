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

            @media(max-width: 728px){
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

                @media(max-width: 420px){
                    width: fit-content;
                }

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

    .skeleton {
        
        @keyframes skeleton-loading{
            from {
                background-color: #c0c0c0;
            }
            to {
                background-color: #4e4e4e;
            }
        }

        .skeleton-text{
            animation: skeleton-loading 1.2s infinite alternate;
            border-radius: .25rem;
        }
        .skeleton-text h2{
            animation: skeleton-loading 1.2s infinite alternate;
            border-radius: .25rem;
        }
        div.img {
            @media(max-width: 728px){
                width: -webkit-fill-available;
            }
        }

        div.img img{
            animation: skeleton-loading 1.2s infinite alternate;
            background-color: #c0c0c0;
            width: 190px!important;
            height: 240px!important;
        }

        h1.skeleton-text{
            background-color: #c0c0c0;
            padding: .1rem 0;
            width: 80%;
            height: 20px;
            margin: 1rem 0;
        }

        a.skeleton-text h2{
            background-color: #c0c0c0;
            padding: .1rem 0;
            width: 50%;
            height: 15px;
            margin: 2rem 0;
        }

        h2.skeleton-text{
            background-color: #c0c0c0;
            padding: .1rem 0;
            width: 50%;
            height: 15px;
            margin: 3rem 0;
        }

        .last-game-stats.skeleton{
            h2.skeleton-text{
                background-color: #c0c0c0;
                padding: .1rem 0;
                width: 93%;
                height: 20px;
                margin: 2rem 0;
            }
        }

        h3.skeleton-text{
            background-color: #c0c0c0;
            padding: .1rem 0;
            width: 93%;
            height: 15px;
            margin: 1rem 0;
        }

        div.skeleton-text{
            background-color: #c0c0c0;
            padding: .1rem 0;
            width: 93%;
            height: 10px;
            margin: 1rem 0;
        }

        li.skeleton-text{
            background-color: #c0c0c0;
            height: 8px;
            margin: 1.6rem 0;
        }
    }
`