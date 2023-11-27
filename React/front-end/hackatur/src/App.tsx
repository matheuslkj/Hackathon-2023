import { GlobalStyle } from './styles/global'
import Header from "./components/Header"
import { Cards } from './components/Card'
import { Outlet } from "react-router-dom"

import Logo from '../imagens/Logo.png'
import banner from '../imagens/Banner.jpg'
import dinheiro from '../imagens/Dinheiro.png'
import cartao from '../imagens/Cartao.png'
import estudante from '../imagens/Estudante.png'
import Footer from './components/Footer/Footer'


function App() {
    return (
        <>  
            <GlobalStyle/>
            <Header imagem={Logo} />
            <img src={banner} alt="Banner" className='banner' />
            <Outlet/>
            <Cards
                imagemD={dinheiro}
                imagemC={cartao}
                imagemE={estudante}
            />
           <Footer/>
        </>
    );
  }
  
  export default App;