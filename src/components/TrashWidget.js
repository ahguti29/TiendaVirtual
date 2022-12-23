import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const TrashWidget = ({ itemId }) => {
const { removeItem } = useContext(CartContext);
return (
    <button
    onClick={() => removeItem(itemId)}
    className="btn btn-outline-danger justify-center items-center -top-2 -right-2 w-10 h-8 bg-red-200 rounded-full"
    >
     <i class="bi bi-trash"></i> Eliminar
    </button>
);
};