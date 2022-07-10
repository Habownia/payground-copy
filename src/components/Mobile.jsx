import '../css/Mobile.css';

import phone from '../img/phone.png';
import googlePlay from '../img/google-play.svg';
import appStore from '../img/app-store.svg';

function Mobile() {
	return (
		<section className='mobile'>
			<img src={phone} alt='smartphone' />
			<div className='mobile--content-container'>
				<h2>Pay bills on your time with one simple login</h2>
				<p>
					Easily manage payments to multiple providers and reduce stress around
					medical bills.
				</p>
				<div className='mobile--buttons'>
                    <img src={googlePlay} alt="app store"/>
                    <img src={appStore} alt="google play"/>
                </div>
			</div>
		</section>
	);
}
export default Mobile;
