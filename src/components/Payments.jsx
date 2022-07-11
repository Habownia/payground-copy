import '../css/Payments.css';

import banerImg from '../img/Payments/baner.jpg';
import phone from '../img/Payments/phone.svg'

function Payments() {
	return (
		<section className='payments'>
			<div className='payments--text-container'>
				<h2>
					Healthcare payments made easy.<sup>™</sup>
				</h2>
				<p>
					A secure way to manage, track, and pay–so you can focus on the good
					stuff.
				</p>
				<div className='get-button'>GetPayGround</div>
			</div>
			<img src={banerImg} alt='people runnning on football pitch' className='payments--img'/>
			<img src={phone} alt='phone' className='payments--phone-img'/>
		</section>
	);
}

export default Payments;
