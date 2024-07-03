import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Service1720018604294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "text",
                    
                    },

                    {
                        name: "created_at",
                        type: "datetime",
                        default: "now()"
                    
                        
                    },
                    
                ],
            }),
            true
        );
    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('service')
    }

}
