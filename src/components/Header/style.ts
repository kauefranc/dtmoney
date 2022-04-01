import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 920px;
    margin: 0 auto;

    padding: 1rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25;
        height: 3rem;
        
        transition: filter 0.2;
        &:hover{
            filter: brightness(0.8);
        }
    }
`