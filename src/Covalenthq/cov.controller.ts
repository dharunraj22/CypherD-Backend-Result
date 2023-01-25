import { Controller, Post, Body, Get} from '@nestjs/common';
import { ProductService } from './cov.service';

@Controller('covalent')
export class ProductController{
    constructor(private readonly productService:ProductService){}
    @Post()
    async addProduct(
        @Body('address') address:string
    ){
        console.log(address)
        const generatedId = this.productService.insertProduct(
            address,
            await this.productService.getResult(address)
            );
            return {generatedId};
    }

    @Get()
    getProducts(){
        return this.productService.getProducts();
    }
}