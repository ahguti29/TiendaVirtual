const ItemDetail = ({ item }) => {
    return (
      <div className="">
        <div>{item.name}</div>
        <img src={item.img} alt="GORRA" />
      </div>
    );
  };
  
  export default ItemDetail;