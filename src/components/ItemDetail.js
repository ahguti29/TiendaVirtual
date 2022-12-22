import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemCount } from './itemCount';
import { CartContext } from '../context/cartContext';
import { useGetItemImg } from '../hooks/useGetItemImg';

const ItemDetail = ({ item }) => {
	const [count, setCount] = useState(1);
	const navigate = useNavigate();
	const { addItem, isInCart } = useContext(CartContext);
	const [currentStock, setCurrentStock] = useState(item.stock);
	const maxQuantity = currentStock;
	const img = useGetItemImg(item.img);

	function handleCount(type) {
		if (type === 'plus' && count < maxQuantity) setCount(count + 1);
		if (type === 'minus' && count > 1) setCount(count - 1);
	}
	function handleAdd() {
		if (currentStock < count) alert('No hay suficiente stock de este producto');
		else {
			setCurrentStock(currentStock - count);
			addItem(item, count);
		}
	}

	function handleCheckout() {
		navigate('/cart');
	}

	return (
		<div className=" container text-center card-effect border border-secondary border-opacity-50 cuadro bg-light">
			<div className="card-body  text-dark">{item.name}</div>
			<div>
				{!img ? ("Loading...") : (<img className=" h-10 w-25 flex cuadro" src={img} alt={item.name} />)}	
			</div>
			<div className="text-center">
				<p className="mt-4">{item.description}</p>
				<span>
					Precio: <strong>${item.price}</strong>
				</span>
				{currentStock > 0 && (
					<p className="descripcion text-sm">En Stock: {currentStock}</p>
				)}

				<div className="flex flex-col flex-1 items-center">
					{currentStock > 0 ? (
						<ItemCount count={count} handleCount={handleCount} />
					) : (
						<span className=" text-red-500 mt-10">Sin stock</span>
					)}
					<div className="w-full flex flex-col items-center">
						<button
							onClick={handleAdd}
							type="button"
							className="boton btn btn-success disabled:opacity-40 m-3"
							disabled={currentStock === 0}
						>
							Agregar al carrito
						</button>
						<button
							disabled={!isInCart(item.id)}
							onClick={handleCheckout}
							type="button"
							className="boton btn btn-success disabled:opacity-50"
						>
							Comprar Productos
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
