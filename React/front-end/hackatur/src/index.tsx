import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import List from './components/List/List.tsx'
import Sobre from './components/Sobre/Sobre.tsx'
import { Cards } from './components/Card/index.tsx'

import dinheiro from '../imagens/Dinheiro.png'
import cartao from '../imagens/Cartao.png'
import estudante from '../imagens/Estudante.png'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Cards
        imagemD={dinheiro}
        imagemC={cartao}
        imagemE={estudante}
    />
      },
      {
        path: "List",
        element:<List/>
      },
      {
        path: "Sobre",
        element : <Sobre/>
      }

    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
