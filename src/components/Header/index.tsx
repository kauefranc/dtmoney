import logo from "../../assets/logo.svg"

import { Container, Content } from "./style"

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money"/>
                <button type="button">
                    Nova transaçāo
                </button>
            </Content>
        </Container>
    )
}