import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Discover } from "./components/Discover/Discover";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Discover />
			<Footer />
		</>
	);
}

export default App;
