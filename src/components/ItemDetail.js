const ItemDetail = ({ item }) => {
    return (
      <div>
        <div>{item.name}</div>
        <img src={item.img} alt="Gorras" />
      </div>
    );
  };
  
  export default ItemDetail;