import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsGateway } from './products.gateway';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([ProductRepository])
  ],
  providers: [ProductsGateway, ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
