import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function ProductActionPage(props) {

	let history = useHistory();
	let { id } = useParams();

	const [formPro, setFormPro] = useState({
		id: "",
		txtName: "",
		txtPrice: "",
		chkStatus: false
	});

	var { txtName, txtPrice, chkStatus } = formPro;



	// Use for Update
	useEffect(() => {
		if (id) {
			props.onEditProduct(id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	var { itemEditing } = props;
	useEffect(() => {
		if (id && itemEditing) {
			setFormPro({
				id: itemEditing.id,
				txtName: itemEditing.name,
				txtPrice: itemEditing.price,
				chkStatus: itemEditing.status,
			});
		}
	}, [id, itemEditing]);


	const onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.type === "checkbox" ? target.checked : target.value;

		setFormPro(prev => ({
			...prev, [name]: value
		}));
	}

	const onSave = (e) => {
		e.preventDefault();

		var product = {
			id: id,
			name: txtName,
			price: txtPrice,
			status: chkStatus
		}

		if (formPro.id) {
			props.onUpdateProduct(product);
		}
		else {
			props.onAddProduct(product);
		}
		history.goBack();
	}

	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-md-6">
					<form onSubmit={onSave}>
						<div className="form-group">
							<label>Name Product</label>
							<input
								type="text"
								className="form-control"
								placeholder="Name Product"
								name="txtName"
								value={txtName || ""}
								onChange={onChange}
							/>
						</div>
						<div className="form-group">
							<label>Price</label>
							<input
								type="number"
								className="form-control"
								placeholder="Price"
								name="txtPrice"
								value={txtPrice || ""}
								onChange={onChange}

							/>
						</div>
						<div className="form-group">
							<label>Status</label>
							<div className="form-check">
								<label className="form-check-label">
									<input
										type="checkbox"
										className="form-check-input"
										name="chkStatus"
										value={chkStatus || ""}
										onChange={onChange}
										checked={chkStatus || ""}
									/>
									Stocking
								</label>
							</div>
						</div>

						<Link to="/product-list" className="btn btn-primary mr-2">Back to list products</Link>
						<button type="submit" className="btn btn-success">Save</button>

					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		itemEditing: state.itemEditing
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddProduct: (product) => {
			dispatch(actions.actAddProductRequest(product));
		},
		onEditProduct: (id) => {
			dispatch(actions.actGetProductRequest(id));
		},
		onUpdateProduct: (product) => {
			dispatch(actions.actUpdateProductRequest(product));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)

