import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { item as itemMock } from '../mocks/item.mock';

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [item, setItem] = useState(null);

	useEffect(() => {
		new Promise((resolve) => setTimeout(() => resolve(itemMock), 2000)).then(
			(data) => {
				const result = data.find((item) => {
					return item.id === id;
				});
				setItem(result);
			}
		);
	}, [id]);

	if (!item) {
		return <p>Loading...</p>;
	}

	return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
