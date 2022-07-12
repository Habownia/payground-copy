import '../css/Footer.css';

import logo from '../img/Footer/logo.svg';
import googlePlay from '../img/Footer/google-play.svg';
import appStore from '../img/Footer/app-store.svg';
import aicpa from '../img/Footer/aicpa-logo.png';
import facebook from '../img/Footer/facebook.svg';
import twitter from '../img/Footer/twitter.svg';
import instagram from '../img/Footer/instagram.svg';
import linkedin from '../img/Footer/linkedin.svg';

function Footer() {
	return (
		<footer>
			<div class='footer--container'>
				<img src={logo} alt='logo' className='footer--logo' />
				<div className='footer--links-container'>
					<div className='footer--column'>
						<h3>Pay with PayGround</h3>
						<p>PayGround is available for free on popular mobile app stores.</p>
						<img
							src={appStore}
							alt='app store logo'
							className='footer--button'
						/>
						<img
							src={googlePlay}
							alt='google play logo'
							className='footer--button'
						/>
						<a href='#' target='_blank' className='underline'>
							Pay with PayGround
						</a>
					</div>
					<div className='footer--column'>
						<h3>Accept payments</h3>
						<a href='#' target='_blank'>
							Hospitals
						</a>
						<a href='#' target='_blank'>
							Clinics
						</a>
						<a href='#' target='_blank'>
							Partners
						</a>
						<a href='#' target='_blank'>
							Pricing
						</a>
					</div>
					<div className='footer--column'>
						<h3>About</h3>
						<p>About</p>
						<p>Contact</p>
						<p>Support</p>
						<p>Blog</p>
						<p>Careers</p>
						<p>Media Kit</p>
					</div>
					<div className='footer--column'>
						<h3>Company</h3>
						<p>
							365 E. Germann Rd.
							<br />
							Suite 280
							<br />
							Gilbert, AZ 85297
						</p>
						<a href='#' target='_blank' className='underline'>
							hello@payground.com
						</a>
						<a href='#' target='_blank' className='underline'>
							800.385.4556
						</a>
						<div className='footer--logos-container'>
							<img
								src={facebook}
								alt='facebook logo'
								className='footer--logos'
							/>
							<img src={twitter} alt='twitter logo' className='footer--logos' />
							<img
								src={instagram}
								alt='instagram logo'
								className='footer--logos'
							/>
							<img
								src={linkedin}
								alt='linkedin logo'
								className='footer--logos'
							/>
						</div>
					</div>
				</div>
				<div>
					<div className='footer--bottom'>
						<img src={aicpa} alt='aicpa logo' />
						<div className='footer--bottom-container'>
							<p>© 2022 PayGround.</p>
							<a href='#'>Privacy Policy</a>
							<a href='#'>Terms of Service</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
