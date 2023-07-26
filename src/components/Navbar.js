import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => (
  <>
    <div className="headerContainer">
      <div className="nav-container">
        <div className="brand">Math-Magician</div>
        <div className="nav">
          <ul className="navbar">
            <li className="nav-item">
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/calculator">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/quotes">
                Quotes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Navbar;
