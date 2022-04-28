import styled from 'styled-components'

export const Container = styled.div`

    .month-score{
        width: min-width;
        color: #FFF;
        font-size: 2.2rem;
        display: flex;
        flex-direction: column;

        @media(max-width: 420px){
            width: 320px;
        }
        

        h3{
            margin-left: 2rem;
            font-weight: 400;
        }

        h3.month-heading{
            padding: 2.5rem 0 2.5rem 2rem;
            background-color: #000;
            top: 0;
            margin: 0;
            position: sticky;
            border-radius: 10px 0 0 10px;

            @media(max-width: 940px){
                border-radius: 10px;
            }
        }
        
        .scores{
            align-items: center;
            display: flex;
            flex-direction: column;
            
        }

        div {
            
            div{
            
            }
        }
        img {
            width: 15rem;
        }
    }

   

`