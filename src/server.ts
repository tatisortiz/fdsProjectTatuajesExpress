import 'dotenv/config';
import express from 'express';
import {  getAllUsers, getProfileUsers, updateUsers, } from './controllers/users.controllers';
import {  appointCreateCita, getAllAppointById, getAppointment, updateAppoint } from './controllers/appointments.controllers';
import { AppDataSource } from './database/db';
import { createService, deleteSeerviceById, getAllService, updateServiceById } from './controllers/service.controllers';
import { createRole, deleteRole, getAllRole, updateRole } from './controllers/role.controllers';
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


////////////ROLES//////////
app.post('/api/roles',auth,isAdmin, createRole);
app.get('/api/roles',auth, isAdmin, getAllRole);
app.put('/api/roles',auth, isAdmin, updateRole);//
app.delete('/api/roles',auth, isAdmin ,deleteRole);//


/////////Users////////////////777
app.get("/api/users", auth, isSuperAdmin, getAllUsers);
app.get("/api/users/profile", auth, getProfileUsers);
app.put("/api/users/profile", auth, updateUsers);



///SERVICIOS////

app.get('/api/services',getAllService);
app.post('/api/services', auth, isSuperAdmin,createService);
app.put('/api/service/:id',auth,isSuperAdmin, updateServiceById);//
app.delete('/api/service/:id',auth,isSuperAdmin, deleteSeerviceById);///





////// CITAS///////

app.post('/api/appointments',auth, appointCreateCita);///

app.put('/api/appointments',auth,updateAppoint);///
app.get ('/api/appointments',auth, isAdmin,getAppointment);

app.get('/api/appointments/id:',auth, isAdmin,getAllAppointById);//















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