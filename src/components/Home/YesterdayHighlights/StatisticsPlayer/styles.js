import styled from 'styled-components'

export const Container = styled.div`

    margin: 1rem 0;
    font-weight: 400;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 400;

    .name-and-position {
        background-color: #c0c0c0;
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    
    .name-and-position div{

        margin: 0.5rem;
    }

    .name-and-position div *{
        display: flex;
        font-weight: 600;
    }

`