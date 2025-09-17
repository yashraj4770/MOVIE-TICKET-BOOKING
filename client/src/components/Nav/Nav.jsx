import './Nav.css';
import Nav from './Nav.json';
import { FaUser } from "react-icons/fa";

function Navbar() {

  const user = localStorage.getItem('user');

  return (
    <header>
      <nav>
        <div className="mobile-nav-header">
          <h1>Galaxy Cinema</h1>
          <img src="../src/assets/menu.png" alt="mobile menu" id="mobile-menu" />
        </div>
        <div className='hide'>
        <ul id="nav-links" className='nav-flex'>
          {
            Nav.map(items => (
              <div key={items.key} >
                <li ><a href={items.url}>{items.title}</a></li>
              </div>
            ))
          }

          {user != null ? (
            <li id="user-mobile"><a href="/profile"><i><FaUser /></i> {user}</a></li>
          ) : (
            <li><a href="/signIn"><button className="sign-up-btn" id="sign-up-btn-nav">Sign In</button></a></li>
          )}
        </ul>
        </div>
        {user != null ? (
          <span id="user-web"><a href="/profile"><i className="far fa-user"></i> {user}</a></span>
        ) : (
          <a href="/signIn"><button className="sign-up-btn" id="sign-up-btn">Sign In</button></a>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
