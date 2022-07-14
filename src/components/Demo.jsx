import '../css/Demo.css';

import docImg from '../img/Demo/doc.webp';

function Demo() {
	return (
		<section className='demo center'>
			<div class='demo--container'>
				<h3>Are you a Medical Provider?</h3>
				<h2>Accept payments with PayGround</h2>
				<p>
					Improve collections, reduce costs, and boost patient satisfaction with
					our advanced payment platform.
				</p>
				<span className='demo--button'>Demo the Platform</span>
			</div>
			<img src={docImg} alt='doctor with tablet' />
		</section>
	);
}

export default Demo;
