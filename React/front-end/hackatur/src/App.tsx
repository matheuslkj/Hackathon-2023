import { GlobalStyle } from './styles/global'
import Header from "./components/Header"

import Logo from '../imagens/Logo.png'
import banner from '../imagens/Banner.jpg'


function App() {
    return (
        <>
            <Header imagem={Logo} />
            <img src={banner} alt="Banner" className='banner' />
            <GlobalStyle/>
        </>
    );
  }
  
  export default App;