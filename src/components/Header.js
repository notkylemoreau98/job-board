import React from 'react';
import './styles/Header.css';
import SunIcon from './styles/assets/desktop/icon-sun.svg';
import MoonIcon from './styles/assets/desktop/icon-moon.svg';

function Header() {
	return (
		<div className="header">

			<section className="top__content">
				<h1 className="header__title">devjobs</h1>

				<div className="header__toggleContainer">
					<img src={SunIcon} alt="Light Mode" />
					<div className="header__toggle"></div>
					<img src={MoonIcon} alt="Dark Mode" />
				</div>
			</section>

			<section className="filter__container">
				<input type="text" />
				<input type="text" />
				<input type="checkbox" />
			</section>
		</div>
	)
}

export default Header
