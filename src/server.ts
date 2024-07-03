import 'dotenv/config';
import express from 'express';
import { createdUser, userModifyData, userProfile } from './controllers/users.controllers';
import { authLogin, authRegister } from './controllers/register.controllers';


const app = express()

app.use(express.json());

const PORT = process.env.PORT || 4200


////////////Authentication///////
app.post('/api/auth/register', authRegister)
app.post('/api/auth/login', authLogin)



/////USERS///////////
app.get('/api/users', createdUser );

app.get ('/api/users/profile',userProfile);

app.put ('/api/users/profile',userModifyData);

app.get ('')





app.listen(PORT, () => {
    console.log('funciona perfectamente')
}) 

