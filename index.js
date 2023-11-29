import express from "express";
import { promises as fs } from 'fs'
import carsRouter from "./routes/cars.js"

const { readFile } = fs

global.fileName = "car-list.json"

const app = express()

app.use(express.json())

app.use("/cars", carsRouter)

app.listen(3000, async () => {
    try {
        await readFile(fileName)
        console.log("API Started!")
    } catch (err) {
        console.log(err)
    }
}
)