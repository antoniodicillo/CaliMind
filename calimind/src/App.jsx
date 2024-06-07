import Header from './Componentes/Header/index';
import Footer from './Componentes/Footer/Footer';
import {Outlet} from 'react-router-dom';


function App() {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Sobre Nos', link: '/Sobre' },
    { text: 'Alimentação', link: '/Alimentacao' },
    { text: 'Sign In', link: '/SignIn' },
    { text: 'Login', link: '/Login' },
  ];
  return (
        <>
          <Header  menuItems={menuItems} />
          <Outlet/>
          <Footer/>
        </>
  )
}

export default App
