import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Data from './components/sections/Data';
import Projects from './components/sections/Projects';
import Clients from './components/sections/Clients';
import Contact from './components/sections/Contact';

const Home = () => {

	return (
		<div>
			<Hero />
			<Services />
			<About />
			<Data />
			<Projects />
			<Clients />
			<Contact />
		</div>
	);
}

export default Home;
