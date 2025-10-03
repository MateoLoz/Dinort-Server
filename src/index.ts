import express from 'express';
import logger from 'morgan'
import router from './router/router';
import 'dotenv/config';

const app = express();

app.use(logger('dev'));

app.get('/',(req,res)=> {
    res.status(200).json({
        message:'Server is now Online!'
    })
})

app.use('/api', router);

app.listen(process.env.PORT,()=> {console.log(`Server running on Port ${process.env.PORT} ✅`)});

export default app;