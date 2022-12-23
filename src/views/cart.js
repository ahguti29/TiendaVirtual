import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import { Item } from "../components/Item"


const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Layout>
      <div className="m-5">
        {items.length === 0 ? (
          <div className=" justify-center text-center">
            <h1 className="text-white text-center">No has agregado productos</h1>
            <button
              onClick={() => navigate("/")}
              className="p-2 btn btn-warning text-white m-4"
            >
              Volver al Inicio
            </button>
          </div>
        ) : (
          <div className="justify-center text-center">
            <div className="align-items-center text-center">
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="justify-center text-center">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-4">
              <div className="flex flex-col">
                <span className="text-white">
                  Total a pagar: <strong>${totalAmount}</strong>
                </span>
                <button
                  onClick={goToCheckout}
                  className="rounded-lg ms-3 p-2 btn btn-success text-white"
                >
                  Ir a Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;