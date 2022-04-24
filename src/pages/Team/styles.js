import styled from 'styled-components'

export const Container = styled.div`


    .team-page{
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        padding: 0 0 0 2rem;
        background-color: rgba(0, 0, 9, 0.8);
        
        
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

    .all-season-info{
        overflow: auto;

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