import express from 'express';
import logger from 'morgan'
import router from './router/router';
import cors from 'cors';
import rateLimit from "express-rate-limit";
import { allowedUrls } from './lib/const';
import { CronJob } from "cron";

import 'dotenv/config';
import './features/Email/email.listener';


const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 60,
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedUrls.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use(limiter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server is now Online!'
    })
})

const job = new CronJob(
    "0 */15 * * * *",
    async function () {
        console.log("Awake Server!");
        if (process.env.PROD_API_URL) {
            try {
                await fetch(`${process.env.PROD_API_URL}/`);
            } catch (error) {
                console.error(error);
            }
        }
    },
    null,
    true
);

job.start();

app.use('/api', router);

app.listen(process.env.PORT, () => { console.log(`Server running on Port ${process.env.PORT} ✅`) });

export default app;