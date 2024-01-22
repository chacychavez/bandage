import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import Modal from '@mui/material/Modal';
import Cart from '@/components/Cart';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { CartProduct, Product } from '@/services/types';
import {
	addProductToCart,
	addProductToWishlist,
	decrementProductToCart,
	removeProductFromCart,
	removeProductFromWishlist,
} from '@/lib/prouctSlice';
import Wishlist from '@/components/WIshlist';
import { ThemeProvider } from '@emotion/react';
import theme from '@/themes/default';
import { defaultTheme } from '@mui/material-next';

interface CartContextReturn {
	showCartModal: boolean;
	openCartModal: () => void;
	closeCartModal: () => void;
	showWishlistModal: boolean;
	openWishlistModal: () => void;
	closeWishlistModal: () => void;
	addToCart: (product: Product) => void;
	decrementCart: (productId: number) => void;
	removeFromCart: (productId: number) => void;
	addToWishlist: (product: Product) => void;
	removeFromWishlist: (productId: number) => void;
	cartProducts: CartProduct[];
	wishlistProducts: Product[];
}

const CartContext = createContext({} as CartContextReturn);

export function CartContextProvider({ children }: { children: ReactNode }) {
	const appDispatch = useAppDispatch();
	const cartProducts = useAppSelector((state) => state.product.cart);
	const wishlistProducts = useAppSelector((state) => state.product.wishlist);
	const [showCartModal, setShowCartModal] = useState(false);
	const [showWishlistModal, setShowWishlistModal] = useState(false);

	const openCartModal = () => {
		setShowCartModal(true);
	};
	const closeCartModal = () => setShowCartModal(false);

	const openWishlistModal = () => {
		setShowWishlistModal(true);
	};
	const closeWishlistModal = () => setShowWishlistModal(false);

	const addToCart = (product: Product) => {
		openCartModal();
		appDispatch(addProductToCart({ product }));
	};

	const decrementCart = (productId: number) => {
		openCartModal();
		appDispatch(decrementProductToCart({ productId }));
	};

	const removeFromCart = (productId: number) => {
		appDispatch(removeProductFromCart({ productId }));
	};

	const addToWishlist = (product: Product) => {
		openWishlistModal();
		appDispatch(addProductToWishlist({ product }));
	};

	const removeFromWishlist = (productId: number) => {
		appDispatch(removeProductFromWishlist({ productId }));
	};

	const value = useMemo(
		() => ({
			showCartModal,
			openCartModal,
			closeCartModal,
			showWishlistModal,
			openWishlistModal,
			closeWishlistModal,
			addToCart,
			decrementCart,
			removeFromCart,
			addToWishlist,
			removeFromWishlist,
			cartProducts,
			wishlistProducts,
		}),
		[
			showCartModal,
			openCartModal,
			closeCartModal,
			showWishlistModal,
			openWishlistModal,
			closeWishlistModal,
			addToCart,
			decrementCart,
			removeFromCart,
			addToWishlist,
			removeFromWishlist,
			cartProducts,
			wishlistProducts,
		]
	);

	return (
		<ThemeProvider theme={{ ...defaultTheme, ...theme }}>
			<CartContext.Provider value={value}>
				{children}
				<Modal open={showCartModal} onClose={closeCartModal}>
					<Cart
						closeCartModal={closeCartModal}
						products={cartProducts}
						decrementCart={decrementCart}
						addToCart={addToCart}
						removeFromCart={removeFromCart}
					/>
				</Modal>
				<Modal open={showWishlistModal} onClose={closeWishlistModal}>
					<Wishlist
						closeWishlistModal={closeWishlistModal}
						products={wishlistProducts}
						removeFromWishlist={removeFromWishlist}
					/>
				</Modal>
			</CartContext.Provider>
		</ThemeProvider>
	);
}

export const useCartContext = (): CartContextReturn => useContext(CartContext);
