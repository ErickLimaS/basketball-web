import styled from 'styled-components'
import photo from '../../img/home-img.jpg'

export const Container = styled.div`

    overflow-x: hidden;
    
    .image-cover{
        background-position: center center;   
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.7);
        background-image: url('${photo}');
    }

    .flex{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 900px){
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }
    }

    .flex-2{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header-title{
        width: 70rem;

        h1{
            font-size: 6.5rem;
            color: #ff4a23;
        }

        @media(max-width: 620px){

            h1{
            font-size: 4.6rem;
            }
        }

        @media(max-width: 900px){
            width: revert;
            margin: 2rem;
        }
    }

    .today-matchs {
        height: 95vh;
        overflow: auto;
        overflow-x: hidden;

        ::-webkit-scrollbar {
            width: 3px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1; 
          }
           
          ::-webkit-scrollbar-thumb {
            background: #626262; 
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555; 
          }
    
        h2:first-child{
            margin: 0.5rem 0 0 2rem;
            font-size: 2.4rem;
            font-weight: 500;
        }

        @media(max-width: 990px){
            height: initial;
            overflow: auto;
            overflow-x: hidden;
            width: -webkit-fill-available;
            height: initial;
        }
    }

    small{
        
        color: #646464;

        a{
            color: #646464;
            text-decoration: underline;
            :hover{
                color: #c0c0c0;
            }
        }
    }
    
    .previous-games {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .game-statistics{
        display:none;
        transition: all ease-in 550ms;
    }
    
    .previous-games .game-statistics:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .yesterday-highlight-games{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2{
            font-size: 3rem;
        }
    }

    div.buttons{
        display: flex;
        justify-content: center;
        align-items: center;

         button{
            width: 4rem;
            height: 4rem;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
            border-radius: 80px;
            background-color: #FFF;
            border: 1px solid #000;
            cursor: pointer;

            :hover{
                border: 2px solid #000;
            }
         }
    }

    .teams{
        display: flex;
        flex-direction: column;

        h3{
            font-weight 400;
            font-size: 2.8rem;
            align-self: center;

        }

        .keyframe-teams{
            margin: 1rem 0;
            display: flex;
            position: relative;
            animation-name: infiniterow;
            animation-duration: 40s;  
            animation-delay: 5s;  
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }

        @keyframes infiniterow{
            from {left: 0px;}
            to {left: -2700px;}

        }
    }
    
`