import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, []);
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$ 1000,00</td>
                        <td>Salário</td>
                        <td>01/01/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 300,00</td>
                        <td>Contas Fixas</td>
                        <td>01/01/2022</td>
                    </tr>

                    <tr>
                        <td>Rancho</td>
                        <td className="withdraw">- R$ 200,00</td>
                        <td>Contas Fixas</td>
                        <td>15/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}