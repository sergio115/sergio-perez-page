import type { NextPage } from 'next';

import { Box } from '@mui/material';

import { Footer } from '../components/ui/Footer';
import { NavBar } from '../components/ui/NavBar';

import About from './about';
import Contact from './contact';
import Experience from './experience';
import Projects from './projects';

const HomePage: NextPage = () => {
	return (
		<>
			<NavBar />
			<Box component="main">
				<About />
				<Experience />
				<Projects />
				<Contact />
			</Box>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default HomePage;
