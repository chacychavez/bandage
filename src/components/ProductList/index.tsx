import { useGetProductsQuery } from '@/services/products';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Image from 'next/image';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ProductList() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	const [skip, setSkip] = useState(0);

	const { data, error, isLoading } = useGetProductsQuery(
		`limit=${10}&skip=${skip}`
	);
	const products = data?.products ?? [];
	const loadMore = () => {
		setSkip(skip + 10);
	};

	return (
		<Box my={10} display="flex" flexDirection="column" alignItems="center">
			<Typography fontSize={20} color="#737373">
				Featured Products
			</Typography>
			<Typography fontSize={24} fontWeight={700} color="#252B42" my="10px">
				BESTSELLER PRODUCTS
			</Typography>
			<Typography fontSize={14} color="#737373">
				Problems trying to resolve the conflict between
			</Typography>
			<Box
				display="grid"
				gridTemplateColumns={isDesktop ? '1fr 1fr 1fr 1fr 1fr' : '1fr'}
				p={3}
				mt={4}
				gap="15px 30px"
			>
				{products.map((product) => (
					<Box
						key={product.id}
						display="flex"
						flexDirection="column"
						alignItems="center"
						mb={2}
					>
						<Image
							src={product.thumbnail}
							alt={product.title}
							width={isDesktop ? 183 : 299}
							height={isDesktop ? 238 : 368}
							style={{
								objectFit: 'cover',
							}}
						/>
						<Box width={183} p="25px" textAlign="center">
							<Typography
								component={Link}
								href={`products/${product.id}`}
								fontSize={16}
								fontWeight={700}
								color="#252B42"
							>
								{product.title}
							</Typography>
							<Typography
								fontSize={14}
								color="#737373"
								mt="10px"
								fontWeight={700}
								textTransform="capitalize"
							>
								{product.category}
							</Typography>
							<Box display="flex" justifyContent="center" mt="15px" gap="5px">
								<Typography fontSize={16} color="#BDBDBD" fontWeight={700}>
									${product.price}
								</Typography>
								<Typography fontSize={16} color="#23856D" fontWeight={700}>
									$
									{(
										product.price -
										product.price * (product.discountPercentage / 100)
									).toFixed(2)}
								</Typography>
							</Box>
						</Box>
					</Box>
				))}
			</Box>
			{data && products.length < data.total && (
				<Button
					onClick={loadMore}
					disabled={isLoading}
					sx={{
						borderRadius: '5px',
						border: '1px solid #23A6F0',
						py: '15px',
						px: 5,
						color: '#23A6F0',
						fontSize: 14,
						fontWeight: 700,
					}}
				>
					{isLoading ? 'LOADING' : 'LOAD'} MORE PRODUCTS
				</Button>
			)}
		</Box>
	);
}
