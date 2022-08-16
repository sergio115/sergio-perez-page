import { useContext } from 'react';
import type { NextPage } from 'next';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';

import { Footer, NavBar } from '../components/ui/';
import { ThemeUiContext } from '../context/theme-ui';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import Projects from './projects';

const HomePage: NextPage = () => {

	const { theme } = useContext(ThemeUiContext);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<nav>
				<NavBar />
			</nav>

			<Box component="main">
				<About />
				<Experience />
				<Projects />
				<Contact />
			</Box>

			<footer>
				<Footer />
			</footer>
		</ThemeProvider>
	);
};

export default HomePage;
