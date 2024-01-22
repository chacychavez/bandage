import { Product } from '@/services/types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartIcon from '@/assets/cart.svg';
import HeartIcon from '@/assets/heart.svg';
import ViewIcon from '@/assets/view.svg';
import StarIcon from '@/assets/stars.svg';
import Image from 'next/image';
import { useState } from 'react';
import ChevRightIcon from '@/assets/ChevronRight.svg';
import ChevLeftIcon from '@/assets/ChevronLeft.svg';
import { useCartContext } from '@/context/CartContext';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Product({ product }: { product: Product }) {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
	const { addToCart, addToWishlist } = useCartContext();

	const [currThumb, setCurrThumb] = useState(product.images.length - 1);

	return (
		<Box
			display="flex"
			flexDirection={isDesktop ? 'row' : 'column'}
			justifyContent="center"
			gap="30px"
			px={isDesktop ? 0 : 5}
		>
			<Box>
				<Box
					width={isDesktop ? '506px' : '100%'}
					height="450px"
					position="relative"
				>
					<Image
						src={product.images[Math.abs(currThumb % 4)]}
						alt="thumb"
						objectFit="cover"
						fill
					/>
					<Box
						position="absolute"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						width="100%"
						height="100%"
					>
						<Button onClick={() => setCurrThumb(currThumb - 1)}>
							<ChevLeftIcon />
						</Button>
						<Button onClick={() => setCurrThumb(currThumb + 1)}>
							<ChevRightIcon />
						</Button>
					</Box>
				</Box>
				<Box display="flex" gap="20px" mt="20px">
					{product.images.slice(0, 4).map((image, idx) => (
						<Box
							key={image}
							width="100px"
							height="75px"
							position="relative"
							border={
								Math.abs(currThumb % 4) === idx ? '2px solid #23856D' : 'none'
							}
						>
							<Image
								src={image}
								alt="thumb"
								objectFit="cover"
								fill
								onClick={() => setCurrThumb(idx)}
								style={{ cursor: 'pointer' }}
							/>
						</Box>
					))}
				</Box>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				pb="95px"
			>
				<Box gap="">
					<Typography fontSize={24} color="#252B42" mb="10px">
						{product.title}
					</Typography>
					<Typography display="flex" mb="18px">
						<StarIcon /> 10 Reviews
					</Typography>
					<Typography fontSize={24} fontWeight={700} color="#252B42" mb="5px">
						$
						{(
							product.price -
							product.price * (product.discountPercentage / 100)
						).toFixed(2)}
					</Typography>
					<Typography fontSize={14}>
						Availability :
						<span style={{ marginLeft: 4, color: '#23A6F0' }}>In Stock </span>
					</Typography>
					<Typography color="#858585" fontSize={14} width="271px" pt={4} pb={2}>
						Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
						RELIT official consequent door ENIM RELIT Mollie. Excitation venial
						consequent sent nostrum met.
					</Typography>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					borderTop="1px solid #BDBDBD"
					py="30px"
					gap={isDesktop ? '65px' : 3}
				>
					<Box display="flex" gap="10px">
						{['#23A6F0', '#2DC071', '#E77C40', '#252B42'].map((color) => (
							<Box
								key={color}
								width={30}
								height={30}
								bgcolor={color}
								borderRadius={30}
							/>
						))}
					</Box>
					<Box display="flex" gap="10px">
						<Button>Select Options</Button>
						<Button
							onClick={() => addToCart(product)}
							sx={{ minWidth: 'auto' }}
						>
							<CartIcon />
						</Button>
						<Button
							onClick={() => addToWishlist(product)}
							sx={{ minWidth: 'auto' }}
						>
							<HeartIcon />
						</Button>
						<Button sx={{ minWidth: 'auto' }}>
							<ViewIcon />
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
