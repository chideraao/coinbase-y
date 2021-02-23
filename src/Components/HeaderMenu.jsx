import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../State/HeaderContext";

function HeaderMenu() {
	const [menuClick, setMenuClick] = useContext(HeaderContext);

	useEffect(() => {
		return () => {
			setMenuClick(false);
		};
	});

	const handleClick = () => {
		setMenuClick(!menuClick);
	};

	return (
		<div className="header-menu">
			<div className="narrow-header flex">
				<div className="flex">
					<Link to="/">
						<h1 className="logo">basecoin</h1>
					</Link>
				</div>
				<div className="flex">
					<div className="menu-bar" onClick={handleClick}>
						<FontAwesomeIcon
							className="font-awesome"
							fontWeight="light"
							icon="times"
							size="2x"
						/>
					</div>
				</div>
			</div>
			<section className="btn-container">
				<div className="flex-column">
					<div className="btn flex">Get started</div>
					<div className="btn btn-outline">Sign in</div>
				</div>
			</section>
			<section className="nav-links">
				<div className="flex-column">
					<Link to="/prices">Prices</Link>
					<Link to="/learn">Learn</Link>
					<Link to="/about">About</Link>
					<Link to="/careers">Careers</Link>
					<Link to="/press">Press</Link>
				</div>
			</section>

			<section className="earn-section">
				<div className="flex">
					<Link to="/earn">Earn crypto</Link>
					<Link to="/earn" className="btn green-btn">
						Get $40+
					</Link>
				</div>
			</section>
		</div>
	);
}

export default HeaderMenu;
