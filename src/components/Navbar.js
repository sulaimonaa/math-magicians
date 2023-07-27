import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="headerContainer">
      <div className="nav-container">
        <div className="brand">Math-Magician</div>
        <div className="nav">
          <ul className="navbar">
            <li className="nav-item">
              <NavLink className="nav-links" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/calculator">
                Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/quotes">
                Quotes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Navbar;
