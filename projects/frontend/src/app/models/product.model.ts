export interface Product {
    id: number;
    sku: string | number;
    name: string;
    price?: number;
    description?: string;
}

export interface ProductCategory {
    name: string;
    products: Product[]
}

export interface UpdateOrderAction {
    action: "add" | "remove"
    name: string;
    category?: string;
    price: number;
}

export interface OrderItem {
    id: string,
    name: string;
    category: string,
    price: number
}
export interface Order {
    products: OrderItem[]
}