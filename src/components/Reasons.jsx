import '../css/Reasons.css';

import ReasonsBlocks from './ReasonsBlocks';

import clockImg from '../img/Reasons/clock.svg';
import phoneImg from '../img/Reasons/phone.svg';
import callendarImg from '../img/Reasons/callendar.svg';

function Reasons() {
	return (
		<section className='reasons center'>
			<div class='description-container'>
				<h2>A people-first approach to healthcare payments.</h2>
				<p>
					Say goodbye to endless paper statements, various patient portals, and
					long phone waits.
				</p>
			</div>
			<div className='reasons-container center'>
				<ReasonsBlocks
					img={clockImg}
					alt='clock image'
					header='Save time.'
					description='Pay medical bills from multiple providers in one place and on your time.'
				/>
				<ReasonsBlocks
					img={phoneImg}
					alt='clock image'
					header='Rest easy.'
					description='View and pay bills with just a few clicks on our simple and secure mobile app. The app is free to use!'
				/>
				<ReasonsBlocks
					img={callendarImg}
					alt='clock image'
					header='Stress less.'
					description='Schedule payments, view invoices, and track billing history in your digital dashboard.'
				/>
			</div>
		</section>
	);
}

export default Reasons;
