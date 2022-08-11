import { NextPage } from 'next';

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const styles = {
	media: {
		height: 0,
		marginTop: '30',
		paddingTop: '56.25%', // 16:9
	}
};

const proyectos = [
	{
		key: 'Proyecto1',
		alternativeText: '',
		image: '',
		title: 'Titulo',
		description: 'Descripción',
		url: '',
	},
	{
		key: 'Proyecto2',
		alternativeText: '',
		image: '/favicon.ico',
		title: 'Titulo',
		description: 'Descripción',
		url: '',
	},
	{
		key: 'Proyecto3',
		alternativeText: '',
		image: '/favicon.ico',
		title: 'Titulo',
		description: 'Descripción',
		url: '',
	},
	{
		key: 'Proyecto4',
		alternativeText: '',
		image: '/favicon.ico',
		title: 'Titulo',
		description: 'Descripción',
		url: '',
	},
	{
		key: 'Proyecto5',
		alternativeText: '',
		image: '/favicon.ico',
		title: 'Titulo',
		description: 'Descripción',
		url: '',
	},
	{
		key: 'Proyecto6',
		alternativeText: '',
		image: '/favicon.ico',
		title: 'Titulo',
		description: 'Descripción',
		url: '',
	},
];

const Projects: NextPage = () => {

	const proyectosCard: JSX.Element[] = proyectos.map((item) => (
		<Grid
			key={item.key}
			md={4}
			xs={12}
		>
			<Card>
				<CardActionArea>
					<CardMedia
						alt={item.alternativeText}
						component="img"
						image={item.image}
						style={styles.media}
					/>
					<CardContent>
						<Typography variant="h5">{item.title}</Typography>
						<Typography variant="subtitle2">{item.description}</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button color="primary" size="small" style={{ alignSelf: 'end' }}>
						Ver código
					</Button>
				</CardActions>
			</Card>
		</Grid>
	));

	return (
		<Box
			id="projectsPage"
			sx={{
				flexGrow: 1,
				margin: 0,
				padding: '65px 50px',
			}}
		>
			<Typography
				gutterBottom
				component="div"
				variant="h3"
			>
				Proyectos
			</Typography>
			<Grid
				container
				spacing={8}
				sx={{ padding: '100px 0px', }}
			>
				{proyectosCard}
			</Grid>
		</Box>
	);
};

export default Projects;
