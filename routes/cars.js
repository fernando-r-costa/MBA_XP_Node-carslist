import express from 'express';
import { promises as fs } from 'fs';
import { buscaMaior, buscaMenor, buscaRankMaiores, buscaRankMenores, buscaMarca } from '../functions.js';

const { readFile } = fs

const router = express.Router()

router.get("/marcas/maisModelos", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName))
        const resultado = buscaMaior(data)
        res.send(resultado);
    } catch (err) {
        next(err);
    }
});

router.get("/marcas/menosModelos", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName))
        const resultado = buscaMenor(data)
        res.send(resultado);
    } catch (err) {
        next(err);
    }
});

router.get("/marcas/listaMaisModelos/:qtd", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName))
        const resultado = buscaRankMaiores(data, req.params.qtd)
        res.send(resultado);
    } catch (err) {
        next(err);
    }
});

router.get("/marcas/listaMenosModelos/:qtd", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName))
        const resultado = buscaRankMenores(data, req.params.qtd)
        res.send(resultado);
    } catch (err) {
        next(err);
    }
});

router.post("/marcas/listaModelos", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName))
        const resultado = buscaMarca(data, req.body.brand)
        res.send(resultado)
    } catch (err) {
        next(err);
    }
});

router.use((err, req, res, next) => {
    console.log(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})

export default router