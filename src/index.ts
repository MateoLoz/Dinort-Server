import express from 'express';
import logger from 'morgan'
import router from './router/router';
import cors from 'cors';
import { CronJob } from 'cron';

import 'dotenv/config';
import './features/Email/email.listener';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: '*'
}));


app.get('/',(req,res)=> {
    res.status(200).json({
        message:'Server is now Online!'
    })
})

const job = CronJob.from({
	cronTime: '* 15 * * * *',
	onTick: function () {
        console.log('Awake Server!');
        if(process.env.PROD__API_URL) {
            fetch(`${process.env.PROD_API_URL}/`)
        }
	},
	start: true,
});

job.start();

app.use('/api', router);

app.listen(process.env.PORT,()=> {console.log(`Server running on Port ${process.env.PORT} ✅`)});

export default app;