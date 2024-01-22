import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@/assets/menu.svg';
import ListItemIcon from '@mui/material/ListItemIcon';

import UserIcon from '@/assets/user.svg';
import SearchIcon from '@/assets/search.svg';
import CartIcon from '@/assets/cart.svg';
import HeartIcon from '@/assets/heart.svg';
import { useCartContext } from '@/context/CartContext';

export default function NavbarMobile() {
	const { openCartModal, openWishlistModal, cartProducts, wishlistProducts } =
		useCartContext();
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = () => setOpen(!open);

	return (
		<div>
			<Box px={4} py={3} display="flex" justifyContent="space-between">
				<Typography fontSize={24} fontWeight={700}>
					Bandage
				</Typography>
				<Button onClick={toggleDrawer}>
					<MenuIcon />
				</Button>
			</Box>
			<SwipeableDrawer
				anchor="top"
				open={open}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
			>
				<Box
					sx={{ width: 'auto', height: '100vh' }}
					role="presentation"
					onClick={toggleDrawer}
					onKeyDown={toggleDrawer}
				>
					<Box px={4} py={3} display="flex" justifyContent="space-between">
						<Typography fontSize={24} fontWeight={700}>
							Bandage
						</Typography>
						<Button onClick={toggleDrawer}>
							<MenuIcon />
						</Button>
					</Box>
					<List>
						{['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages'].map(
							(text, index) => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemText
											primary={text}
											sx={{
												'& span': {
													fontSize: 30,
													color: '#252B42',
													textAlign: 'center',
												},
											}}
										/>
									</ListItemButton>
								</ListItem>
							)
						)}
						<ListItem disablePadding>
							<ListItemButton
								sx={{ display: 'flex', justifyContent: 'center' }}
							>
								<UserIcon style={{ marginRight: 20 }} transform="scale(2)" />
								<ListItemText
									primary="Login / Register"
									sx={{
										flex: 'none',
										'& span': {
											fontSize: 30,
											color: '#252B42',
										},
									}}
								/>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								sx={{ display: 'flex', justifyContent: 'center' }}
							>
								<ListItemIcon sx={{ minWidth: 'auto', py: 2 }}>
									<SearchIcon transform="scale(2)" />
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								sx={{ display: 'flex', justifyContent: 'center' }}
								onClick={openCartModal}
							>
								<ListItemIcon sx={{ minWidth: 'auto', py: 2 }}>
									<CartIcon transform="scale(2)" />
									<span style={{ marginLeft: 15 }}>{cartProducts.length}</span>
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								sx={{ display: 'flex', justifyContent: 'center' }}
								onClick={openWishlistModal}
							>
								<ListItemIcon sx={{ minWidth: 'auto', py: 2 }}>
									<HeartIcon transform="scale(2)" />{' '}
									<span style={{ marginLeft: 15 }}>
										{wishlistProducts.length}
									</span>
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</SwipeableDrawer>
		</div>
	);
}
