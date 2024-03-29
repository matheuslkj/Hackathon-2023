// Header.tsx
import { Link } from 'react-router-dom';
import { Container } from "./styles";

interface HeaderProps {
  imagem: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ imagem }) => {
  return (
    <Container>
      <img src={imagem} alt="HackaTur" />
      <nav>
        <ul>
          <li className="link"><Link to="/">Página Inicial</Link></li>
          <li><Link to="/Sobre">Sobre</Link></li>
          <li><Link to="/List">Rotas</Link></li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
