import { GlobalStyle } from './styles/global'
import Header from "./components/Header"
import { Cards } from './components/Card'

import Logo from '../imagens/Logo.png'
import banner from '../imagens/Banner.jpg'
import dinheiro from '../imagens/Dinheiro.png'
import cartao from '../imagens/Cartao.png'
import estudante from '../imagens/Estudante.png'


function App() {
    return (
        <>  
             <GlobalStyle/>
            <Header imagem={Logo} />
            <img src={banner} alt="Banner" className='banner' />
            <Cards
                imagemD={dinheiro}
                imagemC={cartao}
                imagemE={estudante}
            />
           
        </>
    );
  }
  
  export default App;