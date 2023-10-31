const express = require("express")
const router = express.Router()
const db = require("./koneksi")

router.get("/", (req, res) => {
    let sql = "select * from kendaraan"

    db.query(sql, (error, result) => {
        let nilai = null
        if (error) {
            nilai = {
                message: "Lu gagal!"
            }
        } else {
            nilai = {
                data: result
            }
        }
        res.json(nilai)
    })
})

router.post("/", (req, res) => {
    let nilai = {
        id_kendaraan: req.body.id_kendaraan,
        nama_kendaraan: req.body.nama_kendaraan,
        merk_kendaraan: req.body.merk_kendaraan,
        plat_no: req.body.plat_no
    }
    let sql = "insert into kendaraan set ?"

    db.query(sql, nilai, (error, result) => {
        let nilai = null
        if (error) {
            nilai = {
                message: "gagal"
            }
        } else {
            nilai = {
                message: result.affectedRows + " berhasil input",
                id_kendaraan: data.id_kendaraan,
                nama_kendaraan: data.nama_kendaraan,
                merk_kendaraan: data.merk_kendaraan,
                plat_no: data.plat_no
            }
        }

    })
    res.json(nilai)
})

router.put("/", (req, res) => {
    let data = {
        nama_kendaraan: req.body.nama_kendaraan,
        merk_kendaraan: req.body.merk_kendaraan,
        plat_no: req.body.plat_no
    }

    let parameter = {
        id_kendaraan: req.body.id_kendaraan
    }

    let sql = "UPDATE kendaraan SET ? WHERE ?";

    db.query(sql, [data, parameter], (error, result) => {
        let nilai = null;
        if (error) {
            nilai = {
                message: "Gagal."
            };
        } else {
            nilai = {
                message: "Berhasil mengupdate data dengan NIK ",
                nama_kendaraan: data.nama_kendaraan,
                merk_kendaraan: data.merk_kendaraan,
                plat_no: data.plat_no
            }
        }
        res.json(nilai)
    })
})

router.delete("/:id_kendaraan", (req, res) => {
    let nilai = {
        id_kendaraan: req.params.id_kendaraan
    }

    let sql = "delete from kendaraan where ?"

    db.query(sql, nilai, (error, result) => {
        let nilai = null
        if (error) {
            nilai = {
                message: "Gagal."
            }

        } else {
            nilai = {
                message: result.affectedRows + " data terhapus"
            }
        }
        res.json(nilai)
    })
})

module.exports = router