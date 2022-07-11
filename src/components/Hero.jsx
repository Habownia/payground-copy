import '../css/Hero.css';

import heroDoc from '../img/Hero/hero-doctor.png';
import heroWave from '../img/Hero/hero-wave.svg';

function Hero() {
	return (
		<section className='hero'>
			<div className='hero--content'>
				<div className='hero--text-container'>
					<h1>Finally, a modern way to pay medical bills</h1>
					<p>
						PayGround simplifies healthcare payments for everyone. Manage,
						track, and pay—all in one place.
					</p>
				</div>
				<img
					src={heroDoc}
					alt='doctor talking to people'
					className='hero--img'
				/>
			</div>
			<img
				src={heroWave}
				alt='minimalistic wave in hero section'
				className='hero--wave'
			/>
		</section>
	);
}

export default Hero;
