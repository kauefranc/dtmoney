import { useState } from "react"
import logo from "../../assets/logo.svg"

import { Container, Content } from "./style"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transaçāo
                </button>
            </Content>
        </Container>
    )
}