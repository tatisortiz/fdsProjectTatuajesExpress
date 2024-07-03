import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('services')
export class Service extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name: 'title'})
    title!: string

    
    @Column({name: 'description'})
    description!: string

    @Column({name: 'created_at'})
    created_at!: Date



}
