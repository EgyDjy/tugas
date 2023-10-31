const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const penyewaRouter = require("./penyewa")
const pemilikRouter = require("./pemilik")
const kendaraanRouter = require("./kendaraan")
const transaksiRouter = require("./kendaraan")

app.use("/pemilik", pemilikRouter)
app.use("/penyewa", penyewaRouter)
app.use("/kendaraan", kendaraanRouter)
app.use("/transaksi_sewa", transaksiRouter)

app.listen(8000, () => {
    console.log("Program berjalan port 8000")
})