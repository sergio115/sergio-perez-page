import { FC } from 'react';

import { Box, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

export const Footer: FC = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				margin: 0,
				padding: '0px 50px'
			}}
		>
			<Grid
				alignItems="center"
				container
				justifyContent="center"
				xs={12}
			>
				<Grid xs={8} textAlign="start">
					<Typography variant="caption">
						© 2022 Sergio Pérez Rosales. Todos los derechos reservados.
					</Typography>
				</Grid>
				<Grid
					textAlign="end"
					sx={{ padding: '10px 0px' }}
					xs={4}
				>
					<IconButton aria-label="linkedIn">
						<LinkedInIcon />
					</IconButton>
					<IconButton aria-label="linkedIn">
						<GitHub />
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
};
