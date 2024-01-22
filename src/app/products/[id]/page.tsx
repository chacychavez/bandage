'use client';

import { useGetProductByIdQuery } from '@/services/products';
import { ThemeProvider } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '@/themes/default';
import { defaultTheme } from '@mui/material-next';
import DiscountHeader from '@/components/DiscountHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';
import ChevRightIcon from '@/assets/chev-right.svg';
import Brands from '@/components/Brands';
import Product from '@/components/Product';
import { Product as TProduct } from '@/services/types';
import ProductReviews from '@/components/ProductReviews';
import { useParams } from 'next/navigation';
import { CartContextProvider } from '@/context/CartContext';

export default function ProductPage() {
	const { id } = useParams<{ id: string }>();

	const { data, error, isLoading } = useGetProductByIdQuery(id);

	return (
		<CartContextProvider>
			<ThemeProvider theme={{ ...defaultTheme, ...theme }}>
				<Box>
					<DiscountHeader />
					<Navbar />

					<Box
						py="24px"
						px="195px"
						display="flex"
						alignItems="center"
						bgcolor="#FAFAFA"
					>
						<Typography color="#252B42" fontSize={14} fontWeight={700}>
							Home
						</Typography>
						<ChevRightIcon style={{ margin: '0 15px' }} />
						<Typography color="#BDBDBD" fontSize={14} fontWeight={700}>
							Shop
						</Typography>
					</Box>
					{isLoading ? (
						<Box>
							<Typography>Fetching product</Typography>
						</Box>
					) : error ? (
						<Box>
							<Typography>An error occured</Typography>
						</Box>
					) : (
						<Product product={data ?? ({} as TProduct)} />
					)}
					<ProductReviews />
					<ProductList />
					<Brands />
					<Footer />
				</Box>
			</ThemeProvider>
		</CartContextProvider>
	);
}
