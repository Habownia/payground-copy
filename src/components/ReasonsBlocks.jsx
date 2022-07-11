import '../css/ReasonsBlocks.css';

function ReasonsBlocks(props) {
	return (
		<div className='reason'>
			<img src={props.img} alt={props.alt} className='reason-img' />
			<h3>{props.header}</h3>
			<p>{props.description}</p>
		</div>
	);
}

export default ReasonsBlocks;
