import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    merek : string;

    @IsNotEmpty()   
    model : string;
  
    deskripsi : string;

    harga : bigint;
    
    harga_eceran : bigint;

    stock : number;
    
    satuan : string; 

    sku : string;

    supplier_id : string;
}
