import CartWidget from './CartWidget';

const NavBar = ({ greeting }) => {
	return (
		<div>
			<nav className="navbar navbar-expand-xl navbar-dark bg-primary">
				<div className="container">
					<div>
						<a className="navbar-brand" href="./index.html">
							<img
								src=""
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
								<a className="nav-link text-dark" href="./index.html">
									HOME
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-dark" href="./pages/camisetas.html">
									CAMISETAS
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-dark" href="./pages/busos.html">
									BUSOS
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-dark" href="./pages/gorras.html">
									GORRAS
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-dark"
									href="./pages/regulation.html"
								>
									ACCESORIOS
								</a>
							</li>
						</ul>
						<CartWidget />
					</div>
				</div>
			</nav>
			<p>{greeting}</p>
		</div>
	);
};

export default NavBar;
