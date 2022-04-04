import styled from "styled-components";
import { transparentize } from 'polished'


export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: .25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type = "submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: .25rem;
        border: 0;

        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }

    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface IRadioButtonProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioButton = styled.button<IRadioButtonProps>`

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all ease 0.5;

    &:hover{
        border-color: #aaa;
    }
    img {
        width: 20px;
        height: 20px;
    }
    span{
        margin-left: 1rem;
        display: inline-block;
        font-size: 1rem;
        color: var(--text-title);
    }

`