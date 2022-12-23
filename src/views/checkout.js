import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { CartContext } from '../context/cartContext';
import Swal from 'sweetalert2';

// firebase
import {
	addDoc,
	collection,
	doc,
	getFirestore,
	updateDoc,
} from 'firebase/firestore';

const CheckoutView = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [updatingProducts, setUpdatingProducts] = useState(false);
	const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
	const navigate = useNavigate();

	const getTotalByProduct = (quantity, price) => {
		return quantity * price;
	};

	const handleFinalizePurchase = (event) => {
		event.preventDefault();
		const name = event.target[0].value;
		const phone = event.target[1].value;
		const email = event.target[2].value;

		setIsLoading(true);

		const total = items
			.map((product) =>
				getTotalByProduct(product.quantityAdded, product.item.price)
			)
			.reduce((previousValue, currentValue) => previousValue + currentValue);

		const order = {
			buyer: { name, phone, email },
			items,
			total,
		};
		const db = getFirestore();
		const ordersCollection = collection(db, 'orders');

		addDoc(ordersCollection, order)
			.then(() => {
				setUpdatingProducts(true);
			})
			.catch((err) => console.error({ err }))
			.finally(() => {});
	};

	function confirm() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Compra Exitosa',
			showConfirmButton: false,
			timer: 1500,
		});
	}
	useEffect(() => {
		if (updatingProducts) {
			const db = getFirestore();

			items.forEach((element) => {
				const itemRef = doc(db, 'items', element.item.id);
				const dataToUpdate = {
					stock: element.item.stock - element.quantityAdded,
				};
				updateDoc(itemRef, dataToUpdate)
					.then(() => {
						clear();
						setIsLoading(false);
						confirm();
						navigate('/');
					})
					.catch((err) => console.error(err));
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [updatingProducts]);

	return (
		<Layout>
			<form onSubmit={handleFinalizePurchase} className="row">
				<div className="col-6 m-2">
					<input
						className="form-control"
						placeholder="Nombre Completo"
						required
					/>
				</div>
				<div className="col-6 m-2">
					<input
						className="form-control"
						placeholder="Numero de Telefono"
						type="number"
						required
					/>
				</div>
				<div className="col-6 m-2">
					<input
						className="form-control"
						placeholder="Email"
						type={'email'}
						required
					/>
				</div>
				<div>
					<span className="col-3 text-white ms-4">
						Total a pagar: <strong>${totalAmount}</strong>
					</span>
					<button
						type="submit"
						className="btn btn-success col-2 ms-4  text-white disabled:opacity-50"
						disabled={isLoading}
					>
						Finalizar
					</button>
				</div>
			</form>
		</Layout>
	);
};

export default CheckoutView;
