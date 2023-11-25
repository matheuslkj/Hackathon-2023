import { Container } from "./styles";

export const Header = (prosps: { imagem: string | undefined; }) => {
    return(
        <Container>
            <img src={prosps.imagem} alt="HackaTur" />
            <nav>
                <ul>
                    <li><a className="link">Página Inicial</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Horários</a></li>
                </ul>
            </nav>
        </Container>
    )
}

export default Header;
