import { isSuperAdmin } from "../../middlewares/isSuperAdmin";
import { AppDataSource } from "../db";
import { Role } from "../models/Role"; 

export const rolesSeeder = async () => {
    try {
        await AppDataSource.initialize();

        const userRole = new Role();
        userRole.id = 1;
        userRole.name = "user";
        await userRole.save();

        const adminRole = new Role();
        adminRole.id = 2;
        adminRole.name = "admin";
        await adminRole.save();

        const superAdminRole = new Role();
        superAdminRole.id = 3;
        superAdminRole.name = "superAdmin";
        await superAdminRole.save();

        console.log("==========================");
        console.log("Roles seeder successfully");
        console.log("==========================");

    } catch (error: any) {
        console.error("==========================");
        console.error('ERROR ROLE SEEDER', error.message);
        console.error("==========================");

    } finally {
        await AppDataSource.destroy();
    }
}