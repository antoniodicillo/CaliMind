import {Link} from 'react-router-dom';

function Header({ title, menuItems }) {
  return (
    <header>
      <div>
            <button class="header-button-links"><img src="../public/Logo 1.svg" alt="logo"/></button>

            <div class="header-links">
                {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link to={menuItem.link}>{menuItem.text}</Link>
                </li>
              ))}
            </div>
        </div>

        <a href="/Login"><button class="button-white">Entrar</button></a>
    </header>
  );
}

export default Header;
