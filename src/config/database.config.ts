import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const databaseConfig : TypeOrmModuleOptions = {
    type : "postgres",
    host : "localhost",
    port : 5432,
    username : "posuser",
    password : "posuser",
    database : "simpos",
    entities :["dist/**/*.entity{.ts,.js}"],
    synchronize : true
}