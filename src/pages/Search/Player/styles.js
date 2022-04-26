import styled from 'styled-components'

export const Container = styled.div`
    transition: all ease-in 250ms;
    
    .first-content{

        background-color: rgba(0,0,0,.5);
        border-radius: 4px;
        padding: 3rem!important;
        transition: all ease-in 250ms;

    }

    .input-search-area{
        transition: all ease-in 250ms;

        *{
            padding: 0;
            margin: 0;
            transition: all ease-in 250ms;
        }

        height: 80vh;
        background-image: url(https://wallpaperaccess.com/full/3694273.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: black;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div{
            margin: 2rem 0;
        }

        .heading-text{

            h1{
                font-size: 6rem;
                color: rgb(255 69 29);
            }

            h2{
                color: white;
            }

        }

        .input-search{
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all ease-in 250ms;

            *{
                margin-left: 1rem;
                margin-right: 1rem;
            }

            label{
                display: none;
            }

            input{
                font-size: 1.8rem;
                height: 5vh;
                width: 40vh;
                border-radius: 4px;
                border: 0;
                padding: 0.5rem;
            }

            a{
                padding: 0;
                margin: 0;
            }

            button{
                padding: 1rem;
                height: 100%;
                width: max-content;
                border-radius: 8px;
                border: 1px solid #c0c0c0;
                background-color: #FFF;
                cursor: pointer;

                :hover{
                    background-color: #e3e3e3;
                    border: 1px solid #000;
                }
            }

        }

    }

    .results-to{
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        transition: all ease-in 250ms;
    }
    

    .players-list{
        margin: 1rem;
        transition: all ease-in 250ms;

        display: grid;
        grid-template-columns: auto auto auto auto auto;

        

        .player{
            margin: 2rem;
            border: 1px solid #000;
            border-radius: 4px;
            width: 90%;
            display: flex;
            flex-direction: column;

            :hover{
                box-shadow: 0px 0px 10px 0px #0000008c;
            }

            .player-info-img{
                display: flex;
                align-items: center;
                border-bottom: 1px solid #000;
                width: 100%;

                *{
                    font-weight: 600;
                }

                .player-info{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-left: 1rem; 

                }

                :hover{
                    h3{
                        text-decoration: underline;
                    }
                }

            }

            .player-img{
                width: 50%;
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;

                img{
                    width: 100%;
                    height: 150px;
                    border-radius: 4px;
                }
            }

            .player-team {
                
                h5{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    font-size: 1.8rem;
                    font-weight: 600;

                    :hover{
                        text-decoration: underline;

                    }
                }
            }
        }
    }


`