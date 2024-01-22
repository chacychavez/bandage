import { CartProduct, Product } from '@/services/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SliceState = {
	wishlist: Product[];
	cart: CartProduct[];
};

export const productSlice = createSlice({
	name: 'counter',
	initialState: {
		wishlist: [],
		cart: [],
	} as SliceState,
	reducers: {
		addProductToCart: (state, action: PayloadAction<{ product: Product }>) => {
			const { product } = action.payload;
			const currProduct = state.cart.find((p) => product.id === p.id);
			if (currProduct) {
				currProduct.quantity += 1;
			} else {
				state.cart.push({ ...product, quantity: 1 });
			}
		},
		decrementProductToCart: (
			state,
			action: PayloadAction<{ productId: number }>
		) => {
			const { productId } = action.payload;
			const currProduct = state.cart.find((p) => productId === p.id);
			if (currProduct) {
				if (currProduct.quantity > 1) {
					currProduct.quantity -= 1;
				} else {
					state.cart = state.cart.filter((p) => p.id !== productId);
				}
			}
		},
		removeProductFromCart: (
			state,
			action: PayloadAction<{ productId: number }>
		) => {
			const { productId } = action.payload;
			state.cart = state.cart.filter((p) => p.id !== productId);
		},
		addProductToWishlist: (
			state,
			action: PayloadAction<{ product: Product }>
		) => {
			const { product } = action.payload;
			const currProduct = state.cart.find((p) => product.id === p.id);
			if (currProduct === undefined) {
				state.wishlist.push(product);
			}
		},
		removeProductFromWishlist: (
			state,
			action: PayloadAction<{ productId: number }>
		) => {
			const { productId } = action.payload;
			state.wishlist = state.cart.filter((p) => p.id !== productId);
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addProductToCart,
	decrementProductToCart,
	removeProductFromCart,
	addProductToWishlist,
	removeProductFromWishlist,
} = productSlice.actions;

export default productSlice.reducer;
