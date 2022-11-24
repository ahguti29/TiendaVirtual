import Item from "./Item"

const ItemList = ({ products }) => {
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
  
  export default ItemList;