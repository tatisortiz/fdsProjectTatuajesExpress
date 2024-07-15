import 'dotenv/config';
import express from 'express';
import {  getAllUsers, getProfileUsers, updateUsers, } from './controllers/users.controllers';
import {  appointCreateCita, getAllAppointById, getAppointment, updateAppoint } from './controllers/appointments.controllers';
import { AppDataSource } from './database/db';
import { createService, getAllService } from './controllers/service.controllers';
import { createRole, getAllRole,} from './controllers/role.controllers';
import { authLogin, authRegister } from './controllers/auth.controllers';
import { auth } from './middlewares/auth';
import { isAdmin } from './middlewares/isAdmin';
import { isSuperAdmin } from './middlewares/isSuperAdmin'; 


const app = express()

app.use(express.json());

const PORT = process.env.PORT || 4200

////////////Authentication///////
app.post('/api/auth/register', authRegister);
app.post('/api/auth/login', authLogin);

/////////Users////////////////777
app.get("/api/users", auth, isSuperAdmin, getAllUsers);
app.get("/api/users/profile", auth, getProfileUsers);
app.put("/api/users/profile", auth, updateUsers);



///SERVICIOS////

app.get('/api/services',getAllService);
app.post('/api/services', auth, isAdmin,createService);


////// CITAS///////

app.post('/api/appointments',auth, appointCreateCita);///
app.put('/api/appointments/:id',auth,updateAppoint);///
app.get ('/api/appointments',auth, isAdmin,getAppointment);
app.get('/api/appointments/:id',auth, isAdmin,getAllAppointById);//



////////////ROLES//////////
app.post('/api/roles',auth,isSuperAdmin, createRole);
app.get('/api/roles',auth, isSuperAdmin, getAllRole);













AppDataSource.initialize()
.then(() => {
console.log('Database connected');
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

})
.catch(error => {
console.log(error)
})