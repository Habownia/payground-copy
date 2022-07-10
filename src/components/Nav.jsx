import { useState } from 'react';

import '../css/Nav.css';

import navLogo from '../img/nav-logo.svg';
import hamburgerIcon from '../img/hamburger.png';
import mobileWave from '../img/mobile-wave-image.svg';
import arrow from '../img/arrow-down.png';

function Nav() {
	let setWidth = window.innerWidth >= 1090 ? true : false;

	//to trzeba będzie zmienić jak nauczę się useEffect

	const [menu, setMenu] = useState(setWidth);

	function toggle() {
		setMenu((prevState) => !prevState);
	}

	const [showArrow1, setShowArrowA] = useState(false);

	function arrowToggle1() {
		setShowArrowA((prevState) => !prevState);
	}

	const [showArrow2, setShowArrowB] = useState(false);

	function arrowToggle2() {
		setShowArrowB((prevState) => !prevState);
	}

	return (
		<nav>
			<div class='nav--container'>
				<img src={navLogo} alt='logo image' className='navbar--logo' />
				{menu && (
					<ul>
						<li>I'm a patient</li>
						<li>
							<div className='arrow-container' onClick={arrowToggle1}>
								I'm a medical provide
								<img src={arrow} alt='arrow down' className='nav--arrow' />
							</div>
							{showArrow1 && (
								<ul className='more more-medical' onMouseLeave={arrowToggle1}>
									<li>Clinics</li>
									<li>Hospitals</li>
								</ul>
							)}
						</li>
						<li>
							<div className='arrow-container' onClick={arrowToggle2}>
								More
								<img src={arrow} alt='arrow down' className='nav--arrow' />
							</div>
							{showArrow2 && (
								<ul className='more more-more' onMouseLeave={arrowToggle2}>
									<li>About</li>
									<li>Partners</li>
									<li>Pricing</li>
									<li>Careers</li>
									<li>Contact</li>
								</ul>
							)}
						</li>
					</ul>
				)}
			</div>
			{menu && (
				<div class='nav--button-container'>
					<a href='#' className='log-in'>
						Log in
					</a>
					<a href='#' className='get-payground'>
						Get PayGround
					</a>
				</div>
			)}
			<img
				src={hamburgerIcon}
				alt='hamburger icon'
				className='hamburger-icon'
				onClick={toggle}
			/>
			{menu && (
				<img
					src={mobileWave}
					alt='nav wave minimalistic image'
					className='nav--wave'
				/>
			)}
		</nav>
	);
}

export default Nav;
