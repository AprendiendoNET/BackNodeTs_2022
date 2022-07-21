import express from 'express'

import  orderRouter from './routes/orders'


const app = express()
app.use(express.json())
const PORT = 3000
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.use('/api/orders',orderRouter)

app.listen(PORT,()=>{
    console.log('server corriendo 123')
})


//https://www.youtube.com/watch?v=ZpY5KdGQvwI
