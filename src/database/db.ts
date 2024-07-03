
import "reflect-metadata"
import 'dotenv/config';
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities:[`${__dirname}/models/**/*{.ts,.js}`],
    //entities: [],
    //migrations: [Author1719825085793, User1719829631989,Books1719832332447],
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
    synchronize: false,
    logging: false,
    })