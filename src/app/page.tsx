'use client';

import Box from '@mui/material/Box';
import theme from '@/themes/default';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '@mui/material-next';
import DiscountHeader from '@/components/DiscountHeader';
import Navbar from '@/components/Navbar';
import CardsHeader from '@/components/CardsHeader';
import ProductList from '@/components/ProductList';
import Services from '@/components/Services';
import FeaturedPosts from '@/components/FeaturedPosts';
import Reviews from '@/components/Reviews';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import { CartContextProvider } from '@/context/CartContext';

export default function Home() {
	return (
		<CartContextProvider>
			<ThemeProvider theme={{ ...defaultTheme, ...theme }}>
				<Box>
					<DiscountHeader />
					<Navbar />
					<CardsHeader />
					<ProductList />
					<Services />
					<FeaturedPosts />
					<Reviews />
					<Banner />
					<Footer />
				</Box>
			</ThemeProvider>
		</CartContextProvider>
	);
}
