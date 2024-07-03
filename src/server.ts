import 'dotenv/config';
import express from 'express';
import {  getAllUsers, getUsers, updateusers} from './controllers/users.controllers';
import { authLogin, authRegister } from './controllers/auth.controllers';
import { appointActuCita, appointCreateCIta, appointPropCitas, appointRecupCitaById } from './controllers/appointments.controllers';
import { AppDataSource } from './database/db';
import { getAllService } from './controllers/service.controllers';


const app = express()

app.use(express.json());

const PORT = process.env.PORT || 4200


////////////Authentication///////
app.post('/api/auth/register', authRegister)

app.post('/api/auth/login', authLogin)



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