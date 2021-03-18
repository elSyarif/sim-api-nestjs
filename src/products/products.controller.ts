import { Controller,  Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
    constructor(private productsService : ProductsService){
        this.productsService = productsService
    }
    
    @Get()
    getAllProduct() {
        return this.productsService.findAll()
    }

    @Get('/:id')
    gerProductByID(@Param('id', ParseUUIDPipe) id : string) : Promise<Product> {
        return this.productsService.getById(id)
    }
}
