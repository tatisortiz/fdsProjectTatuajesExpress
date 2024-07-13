import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Service } from "./Service"

@Entity('appointments')
export class Appointments extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    // @Column({name: 'date'})
    // date!: Date

     @Column({ name: "appointment_date"})
     appointment_date!: Date

    @Column({ name: 'user_id'})
    user_id!: number

    @Column({name: 'service_id'})
    service_id!: number

    @ManyToOne(() => User,(users) => users.appointments)
    @JoinColumn ({ name: "user_id"})
    users!: User

    @ManyToOne(() => Service, (services) => services.appointments)
    @JoinColumn({name: "service_id"})
    services!: Service
}
