import { CartProduct, Product } from '@/services/types';
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

type CartProps = {
	closeCartModal: () => void;
	products: CartProduct[];
	addToCart: (product: Product) => void;
	decrementCart: (productId: number) => void;
	removeFromCart: (productId: number) => void;
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
	closeCartModal,
	products,
	addToCart,
	decrementCart,
	removeFromCart,
}: CartProps) {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	const cartTotal = products.reduce(
		(acc, curr) =>
			acc +
			(curr.price - curr.price * (curr.discountPercentage / 100)) *
				curr.quantity,
		0
	);

	return (
		<Box sx={style(isDesktop)}>
			<Box
				maxHeight={isDesktop ? '70vh' : '90vh'}
				height={isDesktop ? 'auto' : '90vh'}
				overflow="auto"
				p={4}
			>
				<Typography fontSize={24}>Cart</Typography>
				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell align="right">Price</TableCell>
								<TableCell align="right">Quantity</TableCell>
								<TableCell align="right">Total</TableCell>
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
										<Button onClick={() => decrementCart(prod.id)}>-</Button>
										{prod.quantity}
										<Button onClick={() => addToCart(prod)}>+</Button>
									</TableCell>
									<TableCell align="right">
										{(
											(prod.price -
												prod.price * (prod.discountPercentage / 100)) *
											prod.quantity
										).toFixed(2)}
									</TableCell>
									<TableCell align="right">
										<Button onClick={() => removeFromCart(prod.id)}>
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
				<Button onClick={closeCartModal}>Close</Button>
				<Typography textAlign="right" fontSize={24}>
					Total: {cartTotal.toFixed(2)}
				</Typography>
			</Box>
		</Box>
	);
}
