import { BaseEntity, Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    merek : string;
    
    @Column()
    model : string;
    
    @Column()
    deskripsi : string;

    @Column('money')
    harga : bigint;
    
    @Column('money')
    harga_eceran : bigint;

    @Column()
    stock : number;
    
    @Column()
    satuan : string; 

    @Column()
    sku : string;

    @Column()
    supplier_id : string;
}
