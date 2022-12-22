 export const ItemCount = ({count, handleCount}) => {
    return (
        <div className=" flex justify-center  mt-10 w-4/5  bg-gray-200 rounded">
            <button onClick={() => handleCount("minus")} className=" flex fw-bold signo btn btn-danger p-1 justify-center">
                -
            </button>
            <span id="counter" className="countNum flex flex-1 justify-center items-center mx-4 font-black">
                {count}
            </span>
            <button onClick={() => handleCount("plus")} className="signo btn btn-success p-1 fw-bold">
                +
            </button>
        </div>
    );
};
