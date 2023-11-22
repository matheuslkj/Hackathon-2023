import Modal from 'react-modal'

import {Header} from './components/Header'
import { Cards } from './components/Cards'

import { GlobalStyle } from './styles/global'

import logo from './imagens/Logo.png'
import banner from './imagens/Banner.jpg'
import dinheiro from './imagens/Dinheiro.png'
import cartao from './imagens/Cartao.png'
import estudante from './imagens/Estudante.png'

Modal.setAppElement('#root')

function App() {

    return (
        <>
            <GlobalStyle />
            <Header
                imagem={logo}
            />
            <img src={banner} alt="Banner" className='banner' />
            <Cards
                imagemD={dinheiro}
                imagemC={cartao}
                imagemE={estudante}
            />
            <footer>
                <p>Desenvolvido por Felipe, Matheus e Thales</p>
            </footer>
        </>
    )
}

export default App
