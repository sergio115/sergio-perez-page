import { NextPage } from "next";

import { Box, TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Contact: NextPage = () => {
	return (
		<Box
			id="contactPage"
			sx={{
				flexGrow: 1,
				margin: 0,
				padding: '65px 50px',
			}}
		>
			<Typography
				component="div"
				gutterBottom
				variant="h3"
			>
				Contacto
			</Typography>
			<Typography
				component="div"
				gutterBottom
				sx={{ padding: '50px 0px', }}
				variant="body1"
			>
				Puedes contactarme llenando el siguiente formulario.
			</Typography>
			<Grid
				container
				md={6}
				spacing={4}
				sx={{ padding: 0, margin: 0, }}
				xs={12}
			>
				<Grid xs={12} md={6}>
					<TextField
						color="primary"
						fullWidth
						id="name"
						label="Nombre"
						placeholder="Juan Pérez"
						required
						variant="outlined"
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						color="primary"
						fullWidth
						id="reason"
						label="Asunto"
						placeholder="Motivo del mensaje"
						required
						variant="outlined"
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						color="primary"
						fullWidth
						id="email"
						label="Correo"
						placeholder="correo@ejemplo.com"
						required
						variant="outlined"
					/>
				</Grid>
				<Grid xs={12}>
					<TextField
						color="primary"
						fullWidth
						id="message"
						label="Mensaje"
						multiline
						placeholder="¿Puedo ayudarle en algo?, ¡Cuenteme más!"
						required
						rows={10}
						variant="outlined"
					/>
				</Grid>
				<Grid xs={12}>
					<Button color="primary" variant="contained">Enviar</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Contact;
