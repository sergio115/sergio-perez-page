import { NextPage } from 'next';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const About: NextPage = () => {
	return (
		<Box
			id="aboutPage"
			sx={{
				padding: '65px 50px',
				margin: 0,
				flexGrow: 1,
			}}
		>
			<Grid
				alignItems="center"
				justifyContent="center"
				container
				spacing={2}
			>
				<Grid
					sx={{ textAlign: 'center' }}
					md={6}
					xs={12}
				>
					<Image
						alt="Imagen de perfil"
						height="600px"
						src="/favicon.ico"
						width="600px"
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<Grid xs={12} >
						<Typography
							gutterBottom
							component="div"
							variant="h3"
						>
							Hola, soy Sergio
						</Typography>
						<Typography variant="body1" gutterBottom>
							Apasionado por el desarrollo de software y temas relacionados a la arquitectura de sistemas.
						</Typography>
						<br />
						<Typography variant="body1">
							Cuento con experiencia desarrollando aplicaciones web y de servidor con JavaScript y C#.
							Adicionalmente tengo conocimientos en Xamarin.Forms usando MVVM y React con NextJS.
						</Typography>
						<br />
						<Typography variant="body1">
							Estoy acostumbrado a trabajar en equipo por objetivos y de manera remota.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
