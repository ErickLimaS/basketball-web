import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FF5733;
    color: #FFF;

    .about {
        display: flex-start;
    }

    ul {
        list-style-type: none;
    }

    li{
        margin: 1.5rem 0;
    }
    
    a {
        color: #FFF;
        padding: 0.5rem;

        :hover{
            color: #e3e3e3;
        }
    }

    hr{
        width: 95%;
        color: #000!important;
    }
    
    .disclaimer{
        display: flex;
        align-self: center;
    }
    
`