import React, { useEffect } from 'react'
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import { Link } from 'react-router-dom';



function ProductListPage(props) {


	useEffect(() => {
		props.fetchAllProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="col-md-12">
			<Link to="product/add" className="btn btn-outline-success mt-5 mb-3">Create New Products</Link>
			<ProductList>
				{showProducts(props.products)}
			</ProductList>
		</div>
	)

	function showProducts(products) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<ProductItem
						key={index}
						product={product}
						index={index}
						onRemove={onRemove}
					/>
				);
			});
		}
		return result;
	}

	function onRemove(id) {
		props.onRemoveProduct(id);
	}

}

const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllProducts: () => {
			dispatch(actions.actFetchProductsRequest());
		},
		onRemoveProduct: (id) => {
			dispatch(actions.actRemoveProductsRequest(id));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);