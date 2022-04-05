import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";


interface ITransaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}
type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionProviderProps {
    children: ReactNode
}

interface IContextData{
    transactions: ITransaction[],
    createTransaction: (transaction: ITransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<IContextData>({} as IContextData);

export function TransactionProvider({children}: ITransactionProviderProps){

    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction (transactionInput: ITransactionInput){
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})

        const { transaction } = response.data

        setTransactions([
            ...transactions, 
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}