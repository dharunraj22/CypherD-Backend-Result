import { ProductService } from './cov.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(address: string): Promise<{
        generatedId: import("./cov.model").Product[];
    }>;
    getProducts(): import("./cov.model").Product[];
}
