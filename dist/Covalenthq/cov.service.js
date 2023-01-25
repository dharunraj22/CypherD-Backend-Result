"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const cov_model_1 = require("./cov.model");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
        this.item = [];
    }
    insertItems(parser) {
        const newItem = new cov_model_1.items(parser.data.items[0].contract_name, parser.data.items[0].contract_ticker_symbol, parser.data.items[1].contract_decimals, parser.data.items[1].contract_address, parser.data.items[1].contract_decimals, parser.data.items[1].logo_url, parser.data.items[0].balance, parser.data.items[0].balance);
        this.item.push(newItem);
    }
    insertProduct(address, result) {
        const newProduct = new cov_model_1.Product(address, result);
        this.products.push(newProduct);
        return this.products;
    }
    async getResult(address) {
        const rp = require('request-promise');
        const url = 'https://api.covalenthq.com/v1/1/address/' + address + '/balances_v2/?key=ckey_e52291d6e2dd46ba9999cb4e5a7';
        const html = await rp(url);
        const obj = Object.assign(html);
        const parser = JSON.parse(obj);
        this.insertItems(parser);
        console.log(this.item);
        return this.item;
    }
    getProducts() {
        return [...this.products];
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=cov.service.js.map