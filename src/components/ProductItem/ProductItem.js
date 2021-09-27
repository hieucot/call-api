import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductItem(props) {

	var { product, index } = props;

	let statusName = product.status ? "Stocking" : "Out of stock";
	let statusClass = product.status ? "success" : "danger";

	return (
		<>
			<tr>
				<td>{index + 1}</td>
				<td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<span className={`badge badge-${statusClass}`}>
						{statusName}
					</span>
				</td>
				<td>
					<Link to={`product/edit/${product.id}`} className="btn btn-primary mr-2">Edit</Link>
					<button
						type="button"
						className="btn btn-danger"
						onClick={() => onRemove(product.id)}
					>
						Remove
					</button>
				</td>
			</tr>
		</>
	)

	function onRemove(id) {
		if (window.confirm("Remove product on list?")) {
			props.onRemove(id);
		}
	}
}
