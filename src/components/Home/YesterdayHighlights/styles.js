import styled from 'styled-components'

export const Container = styled.div`
    color: #000;
    display: flex;
    margin: 2.6rem 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    height: 100%;
    width: 100%;

    @media(max-width: 760px){
        width: 100%;
        margin: 0rem;
    }

    div.section-map {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .score-and-teams {
        color: #000;
        background-color: #dddddd;
        border-radius: 10px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        border: 1px solid rgba(0,0,0,.1);
        transition: all 150ms ease-out;

        @media(max-width: 720px){
            width: min-content;

            img{
                width: 100px;
                height: 100px;
            }
        }

        @media(max-width: 420px){
            flex-direction: column;
            padding: 2rem;

            div.flex-2.team{
                width: 100%;
                flex-direction: row-reverse;
            }
            div.team-home-visitant{
                width: 100%;
                flex-direction: row-reverse;
            }
            .status{
                .score-results{
                    flex-direction: column;
                }
                .match-time{
                    display: none;
                }

            }

            img{
                width: 100px;
                height: 100px;
            }

            .team-home-visitant{
            }

            .score-results *{
                font-size: 3rem;
            }
        }

        :hover{
            border: 1px solid black;
            background-color: white;

            img{
                background-color: #ededed;
                border: 1px solid black;
                border-radius: 40000px;
            }
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
        
    }

    .team {
        margin: 0.5rem 1rem;
        width: 50%;
        height: 100%;

        h2{
            width: 100%;
        }
    }

    .status * {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .status .score-results div{
        margin: 0 2rem;
    }

    .match-time{
        flex-direction: column;
        border-radius: 4px;
        color: red;

        p{
            margin: 0;
        }
    }

    .active{
        flex-direction: column;
        background-color: #FFF;
        border-radius: 4px;

        p{
            color: green;
            margin: 0;
        }
    }

    .inverse{
        flex-direction: row-reverse;
    }

    img {
        width: 200px;
        height: 200px;
        border: 1px solid white;
        background-color: white;
        border-radius: 40000px;
    }
    

    .team-home-visitant{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
    }

    .img-from-other-links-tweaks{
        align-self: center;
        width: 150px;
    }

    h2 {
        font-size: 2rem;
        font-weight: 400;
        margin: 1rem;
        margin: 2rem 0;

        :hover{
            color: rgba(0,0,0,.8);
        }
    }

    .score h3{
        font-size: 5rem;
        font-weight: 500;

        @media(max-width: 426px){
            font-size: 3.6rem;
        }
    }

    .statistics-players{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 2rem;
        width: 100%;

        div.team-players{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            a:hover{
                text-decoration: underline;
            }

            h4{
                font-weight: 600;
            }
        }
        
        @media(max-width: 520px){
            div.team-players{
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                

                .numbers{
                    display: none;

                }
            }
        }
        

        div.name-and-position{
            margin: 0 20px;
        }
    }

    
}
`