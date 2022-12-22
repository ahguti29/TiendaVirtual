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
			<Link to="/cart" className="">
				<div>
					<BiCartAlt size={30} />
				</div>
				{count > 0 && <span className="flex justify-center ">{count}</span>}
			</Link>
		</div>
	);
};
export default CartWidget;
