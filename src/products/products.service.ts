import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getById(id: string) : Promise<Product>{
    const found = await this.productRepository.findOne(id)

    if(!found)
      throw new NotFoundException(`product not found`)

    return found
  }
  
  findAll() {
    return `This action returns all products`;
  }

  async create(createProductDto: CreateProductDto) : Promise<Product> {
    const {deskripsi,harga,harga_eceran, merek, model, satuan, sku, stock, supplier_id} = createProductDto

    const product = new Product
    product.deskripsi = deskripsi
    product.harga = harga
    product.harga_eceran  = harga_eceran
    product.merek = merek
    product.model = model
    product.satuan = satuan
    product.sku = sku
    product.stock = stock
    product.supplier_id = supplier_id
    await product.save()

    return product
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
