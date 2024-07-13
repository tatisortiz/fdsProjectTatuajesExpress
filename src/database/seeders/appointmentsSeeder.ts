import { AppDataSource } from "../db"
import { Appointments } from "../models/Appointments"; 

export const appointmentsSeeder = async () => {
    try {
        await AppDataSource.initialize();
        console.log(1)
        const appointment1 = new Appointments();
        appointment1.id = 1;
        appointment1.appointment_date= new Date ("2024-05-07");
        appointment1.user_id = 2;
        appointment1.service_id = 2;
        await appointment1.save();

       console.log(2)
         const appointment2 = new Appointments();
         appointment2.id = 2;
         appointment2.appointment_date = new Date ("2024-08-07");
         appointment2.user_id = 3;
         appointment2.service_id = 2;
         await appointment2.save();



        // const appointment3 = new Appointments();
        // appointment3.id = 3;
        // appointment3.appointment_date = new Date ("2024-15-07");
        // appointment3.user_id = 4;
        // appointment3.service_id = 5;
        // await appointment3.save();


        // const appointment4 = new Appointments();
        // appointment3.id = 4;
        // appointment3.appointment_date = new Date ("2024-16-07");
        // appointment3.user_id = 1;
        // appointment3.service_id = 5;
        // await appointment3.save();

        console.log("===========================");
        console.log("Appointments seeder executed successfully");
        console.log("===========================");
          
    } catch (error: any) {
      
        console.error("=====================0");
        console.error("Error in appointments seeder ",error )
        console.error("======================0");
    } finally {
        await AppDataSource.destroy();
    }    
}