import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';

const result = dotenv.config();
export const dbConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    // host: process.env.database,
    port: 5432,
    // username: process.env.username,
    // password: process.env.password,
    // database: process.env.database,
    host: "ec2-52-209-185-5.eu-west-1.compute.amazonaws.com", //"129.232.211.166",
    username: "unccznfhpezsve",
    password: "f1ab443e36a420d3bb8a054d3a7af0bacee1048ff273a09adf74197d5d08b729",
    database: "dcmiib13na2men",
    entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
    ssl: 
    {
      require: true, // This will help you. But you will see nwe error process.env.ssl === `true`
      rejectUnauthorized: false // This line will fix new error
    }
  }