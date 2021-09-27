import React from 'react'
import { Route, Link } from 'react-router-dom';

const menus = [
	{
		name: "Home",
		to: "/",
		exact: true
	},
	{
		name: "Product Manager",
		to: "/product-list",
		exact: false
	},
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => {
				var active = match ? "active" : "";
				return (
					<li className={`nav-item ${active}`}>
						<Link className="nav-link" to={to}>
							{label}
						</Link>
					</li>
				);
			}}
		/>
	);
}

export default function Menu() {

	function showMenus(menus) {
		var result = null;
		if (menus.length > 0) {
			result = menus.map((menu, index) => {
				return (
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact}
					/>
				);
			});
		}
		return result;
	}

	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<a className="navbar-brand" href="/">Call API</a>
				<button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						{showMenus(menus)}
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="text" placeholder="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>
		</>
	)
}
