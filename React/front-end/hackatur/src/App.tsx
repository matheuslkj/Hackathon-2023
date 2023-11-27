import { GlobalStyle } from './styles/global'
import Header from "./components/Header"
import { Cards } from './components/Card'
import { Outlet } from "react-router-dom"

import Logo from '../imagens/Logo.png'
import banner from '../imagens/Banner.jpg'
import Footer from './components/Footer/Footer'


function App() {
    return (
        <>  
            <GlobalStyle/>
            <Header imagem={Logo} />
            <img src={banner} alt="Banner" className='banner' />
            <Outlet/>
            
           <Footer/>
        </>
    );
  }
  
  export default App;