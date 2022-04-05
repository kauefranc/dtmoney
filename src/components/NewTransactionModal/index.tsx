import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { TransactionsContext } from '../../contexts/TransactionsContext';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import { Container, TransactionTypeContainer, RadioButton } from './styles';


const MySwal = withReactContent(Swal)


interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose} : INewTransactionModalProps){

    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount: value,
            category,
            type
        }).then( () => {

            MySwal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'transação cadastrada com sucesso!',
            });

        }).catch( () => {

            MySwal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'não foi possível realizar a transação. Tente mais tarde',
            });

        })

        setTitle('')
        setCategory('')
        setType('deposit')
        setValue(0)

        onRequestClose();
        
    }

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

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
                type="text"
                placeholder='Título'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="number" 
                placeholder='Valor' 
                value={value} 
                onChange={event => setValue(+event.target.value)}
            />

            <input 
                type="text" 
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <TransactionTypeContainer>
                <RadioButton type='button' onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioButton>

                <RadioButton type='button' onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioButton>
            </TransactionTypeContainer>

            <button type="submit">Cadastrar</button>

        </Container>
        </Modal>
    );
}