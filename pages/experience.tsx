import { NextPage } from 'next';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Experience: NextPage = () => {
	return (
		<Box
			id="experiencePage"
			sx={{
				padding: '65px 50px',
				margin: 0,
				flexGrow: 1,
			}}
		>
			<Typography
				gutterBottom
				component="div"
				variant="h3"
			>
				Experiencia
			</Typography>

			<Grid
				sx={{ padding: '100px 0px', }}
				textAlign="center"
				spacing={8}
				container
			>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2">1</Typography>
						<Typography variant="subtitle1">KB / Tel</Typography>
						<Typography variant="subtitle1">Desarrollador web</Typography>
						<Typography variant="body1"></Typography>
					</Box>
				</Grid>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2">2</Typography>
						<Typography variant="subtitle1">Freelancer</Typography>
						<Typography variant="subtitle1">Desarrollador, analista</Typography>
						<Typography variant="body1">Analisis y creación de servicios backend y base de datos en .NET con Azure.</Typography>
					</Box>
				</Grid>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2">3</Typography>
						<Typography variant="subtitle1">Axsis</Typography>
						<Typography variant="subtitle1">Especialista de TI</Typography>
						<Typography variant="body1">Desarrollo de aplicaciones web en todo el stack de .NET (frontend y backend).</Typography>
					</Box>
				</Grid>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2">4</Typography>
						<Typography variant="subtitle1">Guadiana Tecnología</Typography>
						<Typography variant="subtitle1">Analista</Typography>
						<Typography variant="body1">Implementación de Odoo ERP dentro de la empresa con AWS.</Typography>
					</Box>
				</Grid>

			</Grid>
		</Box>
	);
};

export default Experience;
