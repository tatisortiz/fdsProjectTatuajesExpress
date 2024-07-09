import 'dotenv/config';
import express from 'express';
import {  getAllUsers, getProfileUsers, updateUsers, updateusers} from './controllers/users.controllers';
import { appointActuCita, appointCreateCIta, appointPropCitas, appointRecupCitaById } from './controllers/appointments.controllers';
import { AppDataSource } from './database/db';
import { createService, deleteSeerviceById, getAllService, updateServiceById } from './controllers/service.controllers';
import { createRole, deleteRole, getAllRole, updateRole } from './controllers/role.controllers';
import { authLogin, authRegister } from './controllers/auth.controllers';
import { auth } from './middlewares/auth';


const app = express()

app.use(express.json());

const PORT = process.env.PORT || 4200


////////////Authentication///////
app.post('/api/auth/register', authRegister);
app.post('/api/auth/login', authLogin);


////////////ROLES//////////
app.post('/api/roles', createRole);
app.get('/api/roles',auth,getAllRole);
app.put('/api/roles',auth, updateRole);
app.delete('api/roles/',auth,deleteRole);



///SERVICIOS////

app.get('/api/services',getAllService);
app.post('/api/services',createService);
app.put('/api/service/:id', updateServiceById);
app.delete('/api/service/:id', deleteSeerviceById);



/////USERS///////////
app.get('/api/users', getAllUsers);
app.get ('/api/users/profile',getProfileUsers);
app.put ('/api/users/profile',updateUsers);
app.delete ('/api/users/id:'deleteUser);
app.put ('/api/users/id:/role', putUserRoles )

////// CITAS///////

app.post('/api/appointments', appointCreateCIta);

app.put('/api/appointments',appointActuCita);

app.get('/api/appointments/id:', appointRecupCitaById);

app.get ('/api/appointments',appointPropCitas);














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