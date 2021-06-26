import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import toDoRoutes from './routes/todo.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/todos', toDoRoutes);

const PORT = process.env.PORT || 4000 ;


mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=> console.log(`Server running on PORT :${PORT}`)))
.catch((error) => console.log(error.message));


mongoose.set('useFindAndModify', false);