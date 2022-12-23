 export const ItemCount = ({count, handleCount}) => {
    return (
        <div className=" flex justify-center  mt-10">
            <button onClick={() => handleCount("minus")} className=" flex fw-bold signo btn btn-danger p-1 justify-center">
                -
            </button>
            <span id="counter" className="justify-center items-center mx-4 font-black fw-bolder">
                {count}
            </span>
            <button onClick={() => handleCount("plus")} className="signo btn btn-success p-1 fw-bold">
                +
            </button>
        </div>
    );
};
