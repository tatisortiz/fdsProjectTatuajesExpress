import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('service')
export class Service extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name: 'title'})
    title!: string

    
    @Column({name: 'description'})
    description!: string


}
