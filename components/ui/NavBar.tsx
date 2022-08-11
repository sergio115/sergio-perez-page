import { FC, useState } from 'react';

import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-scroll/modules';

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
	{
		key: 'AcercaDe',
		pageName: 'aboutPage',
		text: 'Acerca de',
	},
	{
		key: 'Experiencia',
		pageName: 'experiencePage',
		text: 'Experiencia',
	},
	{
		key: 'Proyectos',
		pageName: 'projectsPage',
		text: 'Proyectos',
	},
	{
		key: 'Contacto',
		pageName: 'contactPage',
		text: 'Contacto',
	},
];

export const NavBar: FC<Props> = ({ window }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};


	const desktopMenu: JSX.Element[] = navItems.map((item) => (
		<Button key={item.key} sx={{ color: '#fff' }}>
			<Link
				activeClass="active"
				duration={500}
				offset={0}
				smooth={true}
				spy={true}
				to={item.pageName}
			>
				{item.text}
			</Link>
		</Button>
	));

	const mobileMenu = navItems.map((item) => (
		<ListItem key={item.key} disablePadding>
			<Link
				duration={500}
				offset={0}
				smooth={true}
				spy={true}
				to={item.pageName}
				activeClass="active"
				style={{ width: '100%' }}
			>
				<ListItemButton >
					<ListItemText primary={item.text} />
				</ListItemButton>
			</Link>
		</ListItem>
	));

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						aria-label="open drawer"
						color="inherit"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						variant="h6"
					>
						SERGIO PÉREZ ROSALES
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{desktopMenu}
					</Box>
				</Toolbar>
			</AppBar>

			<Box component="nav">
				<Drawer
					container={container}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					onClose={handleDrawerToggle}
					open={mobileOpen}
					sx={{
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
						display: { xs: 'block', sm: 'none' },
					}}
					variant="temporary"
				>
					<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
						<Typography variant="h6" sx={{ my: 2 }}>
							SERGIO PÉREZ ROSALES
						</Typography>
						<Divider />
						<List>
							{mobileMenu}
						</List>
					</Box>
				</Drawer>
			</Box>
		</Box>
	);
};
