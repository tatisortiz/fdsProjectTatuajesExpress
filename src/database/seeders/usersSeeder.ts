import bcrypt from 'bcrypt';
import { AppDataSource } from "../db";
import { User } from '../models/User'; 

export const usersSeeder = async () => {
    try {
        await AppDataSource.initialize();

        const user = new User();
        user.id = 1;
        user.email = "user@user.com";
        user.password = bcrypt.hashSync("123456789", 10);
        user.role_Id = 1
        await user.save();

        const adminUser = new User();
        adminUser.id = 2;
        adminUser.email = "admin@admin.com";
        adminUser.password = bcrypt.hashSync("123456789", 10);
        adminUser.role_Id = 2
        await adminUser.save();

        const superAdminn = new User();
        superAdminn.id = 3;
        superAdminn.email = "superadmin@superadmin.com";
        superAdminn.password = bcrypt.hashSync("123456789", 10);
        superAdminn.role_Id = 3
        await superAdminn.save();


        const userOne = new User();
        userOne .id = 4;
        userOne .email = "userone@userone.com";
        userOne .password = bcrypt.hashSync("123456789", 10);
        userOne .role_Id = 2
        await  userOne .save();




        const userTatto = new User();
        userTatto.id = 5;
        userTatto.email = "usertatto@usertatto.com";
        userTatto.password = bcrypt.hashSync("123456789", 10);
        userTatto.role_Id = 1
        await  userTatto.save();


        console.log("==========================");
        console.log("Users seeder successfully");
        console.log("==========================");

    } catch (error: any) {
        console.error("==========================");
        console.error('ERROR USER SEEDER', error.message);
        console.error("==========================");

    } finally {
        await AppDataSource.destroy();
    }
}