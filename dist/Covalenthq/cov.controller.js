"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const cov_service_1 = require("./cov.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async addProduct(address) {
        console.log(address);
        const generatedId = this.productService.insertProduct(address, await this.productService.getResult(address));
        return { generatedId };
    }
    getProducts() {
        return this.productService.getProducts();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProducts", null);
ProductController = __decorate([
    (0, common_1.Controller)('covalent'),
    __metadata("design:paramtypes", [cov_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=cov.controller.js.map