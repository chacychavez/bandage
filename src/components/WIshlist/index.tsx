import { Product } from '@/services/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';

import Button from '@mui/material/Button';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

type WishlistProps = {
	closeWishlistModal: () => void;
	products: Product[];
	removeFromWishlist: (productId: number) => void;
};

const style = (isDesktop: boolean) => ({
	position: 'absolute' as 'absolute',
	top: isDesktop ? '50%' : 0,
	left: isDesktop ? '50%' : 0,
	transform: isDesktop ? 'translate(-50%, -50%)' : 'none',
	width: isDesktop ? '70vw' : '100vw',
	height: isDesktop ? 'auto' : '100vh',
	bgcolor: 'background.paper',
	boxShadow: 24,
});

export default function Cart({
	closeWishlistModal,
	products,
	removeFromWishlist,
}: WishlistProps) {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box sx={style(isDesktop)}>
			<Box
				maxHeight={isDesktop ? '70vh' : '90vh'}
				height={isDesktop ? 'auto' : '90vh'}
				overflow="auto"
				p={4}
			>
				<Typography fontSize={24}>Wishlist</Typography>
				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell align="right">Price</TableCell>
								<TableCell align="right">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{products.map((prod) => (
								<TableRow
									key={prod.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="prod">
										<Image
											src={prod.thumbnail}
											width={100}
											height={100}
											style={{ objectFit: 'cover' }}
											alt="thumn"
										/>
									</TableCell>
									<TableCell align="right">
										{(
											prod.price -
											prod.price * (prod.discountPercentage / 100)
										).toFixed(2)}
									</TableCell>
									<TableCell align="right">
										<Button onClick={() => removeFromWishlist(prod.id)}>
											Remove
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
			<Box
				height="10vh"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				px={4}
			>
				<Button onClick={closeWishlistModal}>Close</Button>
			</Box>
		</Box>
	);
}
