import {Link} from 'react-router-dom';
const Item = ({ product }) => {
	return (
		<div className="col-sm-12 col-md-6 col-lg-4 pt-3 pb-3">
			<div className="card style-card ">
				<div className="card-body">
					<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
					<img src={product.img} className="card-img-top card-pers " alt="Product" />
					<h5 className="card-title">{product.name}</h5>
					<div class="star-rating">
						<ul class="list-inline">
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
							</ul>
						</div>
						<p class="item-price"><b>${product.price}</b></p>
					<Link to={`/item/${product.id}`} style = {{textDecoration:'none'}}> <button className='btn btn-warning'>Detalle</button> </Link>
				</div>
			</div>
		</div>
	);
};

export default Item;
