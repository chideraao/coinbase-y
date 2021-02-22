import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../State/HeaderContext";

function HeaderMenu() {
	const [menuClick, setMenuClick] = useContext(HeaderContext);

	const handleClick = () => {
		setMenuClick(!menuClick);
	};

	return (
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
	);
}

export default HeaderMenu;
