import styled from 'styled-components'
import photo from '../../img/home-img.jpg'

export const Container = styled.div`
    
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
    }

    .today-matchs h2:first-child{
        margin: 0.5rem 0 0 2rem;
        font-size: 2.4rem;
        font-weight: 500;
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
    
`