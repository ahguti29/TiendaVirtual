/* import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import {item} from "../mocks/item.mock" */

import { useGetItem } from "../hooks/useGetItem";
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return "...loading";
  }

  return (
    <div className="h-full">
      <ItemList products={items} />
    </div>
  );
};


/* const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(item);
      }, 3000)
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
    return <div class="loader-5 center"><span></span></div>;
  }

  return (
    <div className="container btn">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer; */