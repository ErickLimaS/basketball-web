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

    .header-title{
        width: 70rem;

        h1{
            font-size: 6.5rem;
            color: #ff4a23;
        }
    }

    .today-matchs h2:first-child{
        color: #FFF;
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
    
    .previous-games {
        display: flex;
        flex-direction: row;
    }
    
`