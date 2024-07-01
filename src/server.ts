import 'dotenv/config';
import express from 'express';
import { createdUser } from './controllers/users';


const app = express()

app.use(express.json());

const PORT = process.env.PORT || 4000


////////USERS/////////

app.post('/api/users', createdUser );


app.listen(PORT, () => {
    console.log('funciona perfectamente')
}) 

