const pedidos = require('./pedidos.json')
const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    console.log(pedidos)
    res.send("Hello")
})

app.get("/pedidos", (req, res) => {
    res.send(JSON.stringify(pedidos))
})

app.listen(3005, () => {
    console.log("servidor rodando!")
})