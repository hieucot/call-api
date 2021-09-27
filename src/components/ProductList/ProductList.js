import React from 'react'

export default function ProductList(props) {
	return (
		<>
			<div className="card">
				<div className="card-header">
					<h4 className="card-title">List products</h4>
				</div>
				<div className="card-body">
					<table className="table table-hover table-striped table-bordered table-responsive-md">
						<thead className="thead-dark">
							<tr>
								<th>#</th>
								<th>Code</th>
								<th>Name</th>
								<th>Price</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{props.children}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
