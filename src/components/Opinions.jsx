import '../css/Opinions.css';

import OpinionsQuotes from './OpinionsQuotes';

function Opinions() {
	return (
		<section className='opinions center'>
			<div class='description-container'>
				<h2>A people-first approach to healthcare payments.</h2>
				<p>
					Say goodbye to endless paper statements, various patient portals, and
					long phone waits.
				</p>
			</div>
			<div className='quotes-container center'>
				<OpinionsQuotes
					content='I have my hands full with two little ones, and viewing and paying our medical bills on the go and with a couple of clicks has been a game changer!'
					person='Aimee L.'
				/>
				<OpinionsQuotes
					content='The app led me through the process in a very straightforward way. It guided me from entering provider information all the way to submitting my payment in three easy steps!'
					person='Mike B.'
				/>
				<OpinionsQuotes
					content="PayGround is so easy to use, and has made paying healthcare bills for all my family's various providers so much more efficient."
					person='Shelby B.'
				/>
			</div>
		</section>
	);
}

export default Opinions;
