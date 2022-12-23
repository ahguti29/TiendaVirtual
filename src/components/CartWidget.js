import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { CartContext } from '../context/cartContext';
const CartWidget = () => {
	const { productsAdded } = useContext(CartContext);
	const count = productsAdded.length;
	return (
		<div>
			<Link to="/cart" className="text-white">
				<div>
					<BiCartAlt size={30} />
				</div>
				{count > 0 && <span className=" justify-center text-decoration-none  ">{count}</span>}
			</Link>
		</div>
	);
};
export default CartWidget;
