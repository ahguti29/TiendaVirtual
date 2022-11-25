import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import {item} from "../mocks/item.mock"
const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(item);
      }, 1000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (products) => products.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container btn">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;