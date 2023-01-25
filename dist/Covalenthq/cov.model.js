"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = exports.Product = void 0;
class Product {
    constructor(address, result) {
        this.address = address;
        this.result = result;
    }
}
exports.Product = Product;
class items {
    constructor(name, symbol, decimals, contactAddress, contactDecimals, logo, balance, balanceinUSD) {
        this.name = name;
        this.symbol = symbol;
        this.decimals = decimals;
        this.contactAddress = contactAddress;
        this.contactDecimals = contactDecimals;
        this.logo = logo;
        this.balance = balance;
        this.balanceinUSD = balanceinUSD;
    }
}
exports.items = items;
//# sourceMappingURL=cov.model.js.map