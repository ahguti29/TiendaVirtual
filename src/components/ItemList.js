import { Item } from "./Item"

export const ItemList = ({ products }) => {
    return (
        <div className="container">
          <ul className="row">
            {products.map((product) => (
              <Item product={product} />
            ))}
          </ul>
        </div>
    );
  };