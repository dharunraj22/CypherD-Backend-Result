import { Module } from "@nestjs/common";
import { ProductController } from "./cov.controller";
import { ProductService } from "./cov.service";

@Module({
     controllers:[ProductController],
     providers:[ProductService]
})
export class ProductModule {}