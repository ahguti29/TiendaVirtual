import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/tqnegrojpg.jpg';

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-xl navbar-dark headerpag">
				<div className="container">
					<div>
						<a className="navbar-brand" href="./index.html">
							<img
								src={Logo}
								alt="logo trepadores Quindío"
								width="170"
								height="60"
								className="d-inline-block align-text-top"
							/>
						</a>
					</div>

					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto fw-semibold">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/category/POLOS"
									className="nav-link"

									
								>
									CAMISETAS
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/category/BUSOS"
									className="nav-link"
									href="./pages/busos.html"
								>
									BUSOS
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/category/Gorras"
									className="nav-link"
									href="./pages/gorras.html"
								>
									GORRAS
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/category/Gorras"
									className="nav-link"
									href="./pages/regulation.html"
								>
									ACCESORIOS
								</Link>
							</li>
						</ul>
						<CartWidget />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
