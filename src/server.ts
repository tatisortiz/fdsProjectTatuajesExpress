import 'dotenv/config';
import express from 'express';
import {  getAllUsers, getUsers, updateusers} from './controllers/users.controllers';
import { appointActuCita, appointCreateCIta, appointPropCitas, appointRecupCitaById } from './controllers/appointments.controllers';
import { AppDataSource } from './database/db';
import { createService, deleteSeerviceById, getAllService, updateServiceById } from './controllers/service.controllers';
import { createRole, deleteRole, getAllRole, updateRole } from './controllers/role.controllers';


const app = express()

app.use(express.json());

const PORT = process.env.PORT || 4200


////////////Authentication///////
//app.post('/api/auth/register', authRegister)

//app.post('/api/auth/login', authLogin)


////////////ROLES//////////
app.post('/api/roles', createRole);
app.get('/api/roles',getAllRole);
app.put('/api/roles',updateRole);
app.delete('api/roles/',deleteRole);



/////USERS///////////
app.get('/api/users', getUsers);

app.get ('/api/users/profile',getAllUsers);

app.put ('/api/users/profile',updateusers);

app.get ('')

////// CITAS///////

app.post('/api/appointments', appointCreateCIta);

app.put('/api/appointments',appointActuCita);

app.get('/api/appointments/id:', appointRecupCitaById);

app.get ('/api/appointments',appointPropCitas);


///SERVICIOS////

app.get('/api/services',getAllService);

app.post('/api/services',createService);

app.put('/api/service/:id', updateServiceById);

app.delete('/api/service/:id', deleteSeerviceById);











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