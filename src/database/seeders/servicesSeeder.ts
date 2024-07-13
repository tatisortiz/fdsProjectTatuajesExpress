import { AppDataSource } from "../db";
import { Service } from "../models/Service"; 

export const servicesSeeder = async () => {
    try {
        await AppDataSource.initialize();

        const service1 = new Service();
        service1.id = 1;
        service1.title = "Custom tattoos";
        service1.description = "Clients will have the freedom to select unique motifs and designs, completely customizing their tattoo experience according to their preferences and tastes..";
        await service1.save();

        const service2 = new Service();
        service2.id = 2;
        service2.title = "Catalog tattoos";
        service2.description = "We offer tattoos based on predefined designs in our catalog. Customers can choose from a variety of stylish and proven options.";
        await service2.save();

        const service3 = new Service();
        service3.id = 3;
        service3.title = "Restoration and rejuvenation of works";
        service3.description = "We specialize in the restoration and rejuvenation of existing tattoos. Our experts work to improve and renew old tattoos, restoring their vitality.";
        await service3.save();

        const service4 = new Service();
        service4.id = 4;
        service4.title = "Placement of piercings and dilators.";
        service4.description = "We offer professional services for the placement of piercings and dilators. Our team ensures safe procedures and varied styles to meet our clients' individual preferences.";
        await service4.save();

        const service5 = new Service();
        service5.id = 5;
        service5.title = "Sale of piercings and other items";
        service5.description = "In addition to our application services, we offer a selection of piercings and other body art related items. Customers can purchase quality products to complement their unique style.";
        await service5.save();

        console.log("==========================");
        console.log("Services Seeder Successfully");
        console.log("==========================");

    } catch (error: any) {
        console.error("==========================");
        console.error('ERROR SERVICES SEEDER');
        console.error("==========================");

    } finally {
        await AppDataSource.destroy();
    }
}