export interface Product {
	id: number;
	title: string;
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	images: string[];
	price: number;
	rating: string;
	thumbnail: string;
	stock: number;
}

export interface CartProduct extends Product {
	quantity: number;
}
