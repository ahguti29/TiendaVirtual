import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";

export const Item = ({ product, quantityAdded }) => {
	const navigate = useNavigate();
	const img = useGetItemImg(product.img);
  
	const description = product.description.slice(0, 30);
	const title = product.name.slice(0, 20);
  
	function handleNavigate() {
	  navigate(`/item/${product.id}`);
	}
	
	if (!img) {
	  return "...Loading";
	}

	return (
		<div className="col-sm-12 col-md-6 col-lg-4 pt-3 pb-3">
			<div className="card style-card">
				<div className="card-body">
					<span className="wish-icon"><i className="fa fa-heart-o text-danger"></i></span>
					<img src={img} className="card-img-top card-pers " alt="Product" />
					<span>{product.name.length > 20 ? `${title} ...` : product.name}</span>
					<div class="star-rating">
						<ul class="list-inline">
								<li className="list-inline-item text-warning"><i className="fa fa-star"></i></li>
								<li className="list-inline-item text-warning"><i className="fa fa-star"></i></li>
								<li className="list-inline-item text-warning"><i className="fa fa-star"></i></li>
								<li className="list-inline-item text-warning"><i className="fa fa-star"></i></li>
								<li className="list-inline-item text-warning"><i className="fa fa-star-o"></i></li>
							</ul>
						</div>
						<p className="fw-bolder"><b>${product.price}</b></p>
						<span className="me-4 fw-bold">
                			{quantityAdded ? "Agregados" : " En Stock"}:{" "}
                			{quantityAdded || product.stock}
            			</span>
						<div>
							<button onClick={handleNavigate} className='btn btn-warning me-2 fw-bold'>Detalle</button>
						</div>
				</div>
			</div>
		</div>
	);
};

