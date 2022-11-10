import CartWidget from "./CartWidget";

const NavBar = ({greeting}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-dark bg-primary">
      
            <div className="container">
            
            <div className="collapse navbar-collapse" id="navbarNav">
              
              <ul className="navbar-nav ms-auto fw-semibold">
                <li className="nav-item">
                  <a className="nav-link" href="./index.html">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./pages/video.html">CAMISETAS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./pages/stadings.html">BUSOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./pages/drivers.html">GORRAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./pages/regulation.html">ACCESORIOS</a>
                </li>
              </ul>
              <CartWidget/>
            </div>
            
          </div>
         
        </nav>
            <p>{greeting}</p>
        </div>
    );
};

export default NavBar;