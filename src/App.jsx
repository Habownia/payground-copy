import './App.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Mobile from './components/Mobile';
import Opinions from './components/Opinions';
import Reasons from './components/Reasons';
import Payments from './components/Payments';

function App() {
	return (
		<>
			<Nav />
			<Hero />
			<Mobile />
			<Opinions />
			<Reasons />    
			<Payments />
		</>
	);
}

export default App;
