const ItemDetail = ({ item }) => {
    return (
      <div>
        <div>{item.name}</div>
        <img src={item.img} alt="GORRA" />
      </div>
    );
  };
  
  export default ItemDetail;