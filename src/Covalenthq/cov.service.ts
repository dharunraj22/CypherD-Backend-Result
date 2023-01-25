import { Injectable } from '@nestjs/common';
import {items, Product} from './cov.model';

@Injectable()
export class ProductService{
    private products:Product[]=[];
    private item:items[]=[];

    insertItems(parser:any)
    {
        //console.log("Entry")
        const newItem=new items(
            parser.data.items[0].contract_name,
            parser.data.items[0].contract_ticker_symbol,
            parser.data.items[1].contract_decimals,
            parser.data.items[1].contract_address,
            parser.data.items[1].contract_decimals,
            parser.data.items[1].logo_url,
            parser.data.items[0].balance,
            parser.data.items[0].balance,
        )
        //console.log("Exit")
        this.item.push(newItem);
    }

    insertProduct(address:string, result:any){
        const newProduct=new Product(address, result)
        this.products.push(newProduct);
        return this.products;
    }

    async getResult(address:string){
        const rp = require('request-promise');
        const url = 'https://api.covalenthq.com/v1/1/address/'+address+'/balances_v2/?key=ckey_e52291d6e2dd46ba9999cb4e5a7';

       const html = await rp(url)
       const  obj = Object.assign(html)
       const parser =JSON.parse(obj)

        this.insertItems(parser);
        console.log(this.item)
        return this.item
    }

    getProducts()
    {
        return [...this.products];
    }
}