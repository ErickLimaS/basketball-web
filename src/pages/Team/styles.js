import styled from 'styled-components'

export const Container = styled.div`


    .team-page{
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        padding: 0 0 0 2rem;
        background-color: rgba(0, 0, 9, 0.8);
        
        h1.heading1-mobile{
            display: none;
        }

        @media(max-width: 940px){
            flex-direction: column;
            padding: 0;

            .about-team{
                border-right: 0;
                flex-wrap: wrap;
                justify-content: center;
                flex-direction: row;
                height: initial;
                width: -webkit-fill-available;

                h1.heading1-desktop{
                    display: none;
                }
                h1.heading1-mobile{
                    display: block;
                }

            }

            .all-season-info{

                @media(max-width: 940px){
                    width: -webkit-fill-available;
                }

                div.game-statistics{
                    display: flex!important;

                    div.grid-item{
                        height: initial!important;
                        width: max-content!important;
                    }
                    .score-and-team{
                    }
                }
             }
        }
    }

    .about-team{
        padding: 4rem;
        color: #fff;
        font-weight: 400;
        font-size: 1.6rem;
        border-right: 1px solid #FF5733;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(max-width: 940px){
            div{
                margin: 0 1rem;
            }
        }

        @media(max-width: 640px){
            flex-direction: column!important;
            margin: 1rem;
        }

        ul{
            padding: 0;
            width: max-content;
            list-style-type: none;

            li{
                span {
                    font-weight: 600;
                }

            }
        }
    }

    div.img{
        height: 150px;
        width: 150px;
        border-radius: 4000px;
        border: 1px solid #FFF;
        display: flex;
        align-items: center;
        background-color: #FFF;
    }
    
    img.img-from-other-links-tweaks{
        width: 100%;
        height: 70%;
       
    }

    .all-season-info{
        overflow: auto;

        @media(max-width: 940px){
            overflow: hidden;
            width: initial;

            display: flex;
            flex-direction: column;
            align-items: center;

            div.season-score{
                margin: 0.5rem;
            }

        }

        ::-webkit-scrollbar {
            height: 10px;
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

        .season-score{
            margin: 0 0 0 2rem;

            .season-year{
                color: #FFF;
                font-size: 2.2rem;
                margin-bottom: 1rem;

                .search-button{
                    background-color: rgba(0,0,0,0.6);
                    border-radius: 10px 0 0 10px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    @media(max-width: 940px){
                        border-radius: 10px;
                    }

                    *{
                        margin: 0.5rem;
                    }
                    label{
                        color: #FFF;
                        font-size: 1.8rem;
                    }

                    input {
                        width: 6rem;
                        height: 4rem;
                        font-size: inherit;
                        justify-content: center;
                        border-radius: 8px;
                        border: none;
                    }
                    button{
                        border: 1px solid #fff;
                        color: #000;
                        width: 5.5rem;
                        height: 4rem;
                        border-radius: 8px;
                        cursor: pointer;
                        background-color: #FFF;

                        :hover{
                            background-color: rgba(255,255,255,0.9);
                        }
                    }
                }
                
            }

            div.game-statistics {
                display: grid;
                grid-template-columns: auto auto auto auto auto auto auto;
                flex-direction: column;
                align-items: center;
                width: max-content;
                overflow: hiden;

                @media(max-width: 420px){
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;

                    div.grid-item {
                        height: 90vh;
                        overflow: revert;
                    }
                }
                
                div.grid-item {
                    height: 90vh;
                    overflow: auto;
                    
                    ::-webkit-scrollbar {
                        width: 6px;
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
                }
                
            }

        }
}

`