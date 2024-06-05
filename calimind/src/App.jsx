import Header from './Componentes/Header/index';
import Footer from './Componentes/Footer/Footer';
import {Outlet} from 'react-router-dom';


function App() {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/sobre' },
    { text: 'Contato', link: '/contato' },
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
