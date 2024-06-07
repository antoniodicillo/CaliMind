import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Alimentacao from './pages/Alimentacao'
import Sobre from './pages/Sobre'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home />},
    {
      path: 'Alimentacao',
      element: <Alimentacao />,
    },
    {
      path: 'sobre',
      element: <Sobre />,
    },
    {
      path: 'SignIn',
      element: <SignIn />,
    },
    {
      path: 'Login',
      element: <Login />,
    },
  ],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
