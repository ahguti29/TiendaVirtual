const Item = ({ product }) => {
	return (
		<div className="col-sm-12 col-md-6 col-lg-4 pt-3 pb-3">
			<div className="card style-card ">
				<div className="card-body">
					<img src={product.img} className="card-img-top card-pers " alt="Product" />
					<h5 className="card-title">{product.name}</h5>
					<button className="btn btn-dark">Detalle</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
