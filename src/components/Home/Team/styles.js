import styled from 'styled-components'

export const Container = styled.div`

    *{
        margin: 0;
        padding: 0;
    }

    .team{
        width: 20vh;
        height: 25vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(0,0,0,.5);
        border-bottom: 1px solid rgba(0,0,0,.5);

        :hover{
            background-color: #e3e3e3;
            border-radius: 4px;

        }

        h3{
            font-weight: 400;
        }
        img{
            width: 20vh;
            height: 25vh;
        }

        img.img-other-sources{
            width: 10vh;
            height: 13vh;
        }
    }


`