import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments"

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
    
    @OneToMany(() => Appointments, (appointments) => appointments.services)
    appointments!: Service[]


}
