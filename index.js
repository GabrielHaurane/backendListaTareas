import express from "express";
import morgan from 'morgan'
import cors from 'cors'
import path from "path";
import {fileURLToPath} from 'url'
import './src/database/databaseConnection.js'
const app = express();
// 1
app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), ()=>{
    console.info('estoy escuchando el puerto '+ app.get('port') )
})
// 2
app.use(cors()) // permite conexiones remotas
app.use(morgan('dev')) // da info extra en al terminal (cuando usamos el postman da el get 200)
app.use(express.json()) // interpreta los datos del body en json
app.use(express.urlencoded({extended:true})) // interpreta datos enviados en formularios
const __filename = fileURLToPath(import.meta.url)
// console.log(__filename)
const __dirname = path.dirname(__filename)
// console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public')))


app.get('/tareas', (req,res)=>{
res.send('desde bd')
})