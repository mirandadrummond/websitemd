import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60">
          <rect x="10" y="10" width="80" height="80" fill="#0077c9"/>
          <text x="50" y="50" text-anchor="middle" fill="#fff" font-size="50" font-family="Open Sans, sans-serif">MD</text>
        </svg>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/projects" activeStyle>
			Projects
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Resume
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
