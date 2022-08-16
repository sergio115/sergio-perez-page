import { NextPage } from 'next';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { colors } from '../public/colors';

const styles = {
	title_number_1: {
		color: colors.purple_light,
	},
	title_1: {
		color: colors.purple,
	},

	title_number_2: {
		color: colors.turquoise_light,
	},
	title_2: {
		color: colors.turquoise,
	},

	title_number_3: {
		color: colors.orange_light,
	},
	title_3: {
		color: colors.orange,
	},

	title_number_4: {
		color: colors.pink_light,
	},
	title_4: {
		color: colors.pink,
	},

	subtitle: {
		fontWeight: 600,
	},
};

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
				component="div"
				gutterBottom
				variant="h3"
			>
				Experiencia
			</Typography>

			<Grid
				container
				spacing={8}
				sx={{ padding: '100px 0px', }}
				textAlign="center"
			>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2" sx={styles.title_number_1}>1</Typography>
						<Typography variant="subtitle1" sx={styles.title_1}>KB / Tel</Typography>
						<Typography variant="subtitle1" sx={styles.subtitle}>Desarrollador web</Typography>
						<Typography variant="body1"></Typography>
					</Box>
				</Grid>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2" sx={styles.title_number_2}>2</Typography>
						<Typography variant="subtitle1" sx={styles.title_2}>Valuartech Development Center</Typography>
						<Typography variant="subtitle1" sx={styles.subtitle}>Prestador de servicios profesionales</Typography>
						<Typography variant="body1">Analisis y creación de servicios backend y base de datos en .NET con Azure.</Typography>
					</Box>
				</Grid>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2" sx={styles.title_number_3}>3</Typography>
						<Typography variant="subtitle1" sx={styles.title_3}>Axsis</Typography>
						<Typography variant="subtitle1" sx={styles.subtitle}>Especialista de TI</Typography>
						<Typography variant="body1">Desarrollo de aplicaciones web en todo el stack de .NET (frontend y backend).</Typography>
					</Box>
				</Grid>

				<Grid xs={12} md={3}>
					<Box>
						<Typography variant="h2" sx={styles.title_number_4}>4</Typography>
						<Typography variant="subtitle1" sx={styles.title_4}>Guadiana Tecnología</Typography>
						<Typography variant="subtitle1" sx={styles.subtitle}>Analista</Typography>
						<Typography variant="body1">Implementación de Odoo ERP dentro de la empresa con AWS.</Typography>
					</Box>
				</Grid>

			</Grid>
		</Box>
	);
};

export default Experience;
