import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevDownIcon from '@/assets/chev-down.svg';
import UserIcon from '@/assets/user.svg';
import SearchIcon from '@/assets/search.svg';
import CartIcon from '@/assets/cart.svg';
import HeartIcon from '@/assets/heart.svg';
import { useCartContext } from '@/context/CartContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import NavbarMobile from '../NavbarMobile';

export default function Navbar() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
	const { openCartModal, openWishlistModal, cartProducts, wishlistProducts } =
		useCartContext();

	return isDesktop ? (
		<Stack
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
			mt="12px"
			pl="38px"
			pr="17px"
		>
			<Box display="flex" gap={5}>
				<Typography
					fontSize={24}
					fontWeight={700}
					py="13px"
					pr="79px"
					color="#252B42"
				>
					Bandage
				</Typography>
				<Box display="flex" gap="15px" color="#737373" alignItems="center">
					<Typography fontWeight={700} fontSize={14}>
						Home
					</Typography>
					<Typography fontWeight={700} fontSize={14}>
						Shop
						<ChevDownIcon style={{ marginLeft: 9 }} />
					</Typography>
					<Typography fontWeight={700} fontSize={14}>
						About
					</Typography>
					<Typography fontWeight={700} fontSize={14}>
						Blog
					</Typography>
					<Typography fontWeight={700} fontSize={14}>
						Contact Us
					</Typography>
					<Typography fontWeight={700} fontSize={14}>
						Pages
					</Typography>
				</Box>
			</Box>
			<Box display="flex" alignItems="center">
				<Typography color="#23A6F0" p="15px" fontSize={14} fontWeight={700}>
					<UserIcon style={{ marginRight: 5 }} />
					Login / Register
				</Typography>
				<SearchIcon style={{ margin: 15 }} />
				<Typography
					p="15px"
					fontSize={12}
					color="#23A6F0"
					display="flex"
					alignItems="center"
				>
					<IconButton
						onClick={openCartModal}
						sx={{ fontSize: 12, color: '#23A6F0' }}
					>
						<CartIcon style={{ marginRight: 5 }} /> {cartProducts.length}
					</IconButton>
				</Typography>
				<Typography
					p="15px"
					fontSize={12}
					color="#23A6F0"
					display="flex"
					alignItems="center"
				>
					<IconButton
						onClick={openWishlistModal}
						sx={{ fontSize: 12, color: '#23A6F0' }}
					>
						<HeartIcon style={{ marginRight: 5 }} /> {wishlistProducts.length}
					</IconButton>
				</Typography>
			</Box>
		</Stack>
	) : (
		<NavbarMobile />
	);
}
