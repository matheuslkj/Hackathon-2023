import Modal from 'react-modal'

import {Header} from './components/Header'
import { Footer } from './components/Footer'

import { GlobalStyle } from './styles/global'

import logo from './imagens/Logo.png'
import banner from './imagens/Banner.jpg'

Modal.setAppElement('#root')

function App() {

    return (
        <>
            <GlobalStyle />
            <Header
                imagem={logo}
            />
            <img src={banner} alt="Banner" className='banner' />
            <Footer />
        </>
    )
}

export default App
