import { useState } from 'react';
import Modal from 'react-modal'

import { Container, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'


interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose} : INewTransactionModalProps){

    const [type, setType] = useState('deposit');

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

        <button type='button' onClick={onRequestClose} className='react-modal-close'>
            <img src={closeImg} alt="Fechar Modal" />
        </button>

        <Container>
            <h2>Cadastrar transação</h2>

            <input type="text" placeholder='Título'/>
            <input type="text" placeholder='Valor'/>
            <input type="text" placeholder='Categoria'/>

            <TransactionTypeContainer>
                <button type='button'>
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </button>

                <button type='button'>
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </button>
            </TransactionTypeContainer>

            <button type="submit">Cadastrar</button>

        </Container>
        </Modal>
    );
}