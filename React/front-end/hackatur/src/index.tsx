import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.tsx'
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
        path: "Home",
        element:<Home/>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
