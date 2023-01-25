import { items, Product } from './cov.model';
export declare class ProductService {
    private products;
    private item;
    insertItems(parser: any): void;
    insertProduct(address: string, result: any): Product[];
    getResult(address: string): Promise<items[]>;
    getProducts(): Product[];
}
