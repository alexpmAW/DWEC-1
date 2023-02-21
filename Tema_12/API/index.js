import express, { json, urlencoded } from 'express'
import authRoutes from './routes/auth.js'
import { connect, mongoose } from 'mongoose'
import dashboardRoutes from './routes/dashboard.js'
import verifyToken from './routes/validate-token.js'
import cors from 'cors'
import dotenv from 'dotenv'

mongoose.set('strictQuery', true);
dotenv.config();
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@localhost/${process.env.DBNAME}?retryWrites=true&w=majority`
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((e) => {
    console.log('Database error', e)
  })

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const app = express()

app.use(cors(corsOptions));

app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api/user', authRoutes)
app.use('/api/dashboard', verifyToken, dashboardRoutes)


app.get('/', (req, res) => {
  res.json({ mensaje: 'My Auth Api Rest' })
})

const PORT = process.env.PORT || 8002
app.listen(PORT, () => {
  console.log(`Tu servidor está corriendo en el puerto: ${PORT}`)
})
