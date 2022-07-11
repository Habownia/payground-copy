import '../css/OpinionsQuotes.css';

import quote from '../img/Opinions/quote.svg';

function OpinionsQuotes(props) {
	return (
		<div className='quote'>
			<img src={quote} alt='quote mark' className='quote-img' />
			<p className='quote-content'>{props.content}</p>
			<p className='quote--person'>– {props.person}, PayGround user</p>
		</div>
	);
}

export default OpinionsQuotes;
