import 'dotenv/config'
import './database/connection';
import express from 'express';
import apiRouter from './routes/api';

const app = express()

// Incoming requests MUST be json.
app.use(express.json())

//Group the API routes
app.use('/api', apiRouter)

app.listen(process.env.APP_PORT, () => {
  console.log(`Listing to ${process.env.APP_PORT}`)
});