import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(0,0,0,.85);
    padding: 2rem 0;
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #FFF;

    a{
        color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }

    .flex-2{
        width: 45%;
    }

    .score-and-teams{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        img{
            width: 150%;
            height: 100%;
        }

        .img-from-other-links-tweaks{
            width: 65%;
            height: 75%;
        }

        .team-home-visitant{
            background-color: #FFF;
            border-radius: 40000px;
            width: 30rem;
            height: 30rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .team{
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                font-size: 4rem;
                font-weight: 200;

                :hover{
                    color: rgba(250,250,250,.7);
                }
            }
        }
    }

    .status{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .date p{
            color: #FFF;
            font-size: 2.5rem;
        }

        .score-results {
            display: flex;
            flex-direction: row;
            align-items: center;

            p{
                font-size: 2rem;
                color: #FFF;
            }

            .score h3{
                font-size: 6rem;
                color: #FFF;
                font-weight: 600;
            }

            *{
                padding: 1rem;
            }
        }
    }


`