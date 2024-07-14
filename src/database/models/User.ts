import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Appointments } from "./Appointments"

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number 

    @Column({name: 'name'})
    name!: string

    @Column({name:'email'})
    email!: string

    @Column ({name: 'password'})
    password!: string

    @Column({name:'role_id'})
    role_Id!: number

    @Column({name:'is_active'})
    is_active!: boolean

    @Column({name:'created_at'})
    created_at!: Date

    @Column({name: 'updated_at'})
    updated_at!: Date
    
    @ManyToOne (() => Role, (roles) => roles.users)
    @JoinColumn ({ name: "role_id"})
    roles!: Role;
    
    @OneToMany (() => Appointments, (appointments) => appointments.users)
    appointments!: User[];

}
