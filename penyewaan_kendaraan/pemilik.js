const express = require("express")
const router = express.Router()
const db = require("./koneksi")

router.get("/", (req, res) => {
    let sql = "select * from pemilik"

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
        NIK_pemilik: req.body.NIK_pemilik,
        Nama: req.body.Nama,
        Username: req.body.Username,
        Password: req.body.Password
    }
    let sql = "insert into pemilik set ?"

    db.query(sql, nilai, (error, result) => {
        let nilai = null
        if (error) {
            nilai = {
                message: "gagal"
            }
        } else {
            nilai = {
                message: result.affectedRows + " berhasil input",
                NIK_pemilik: data.NIK_pemilik,
                Nama: data.Nama,
                Username: data.Username,
                Password: data.Password
            }
        }

    })
    res.json(nilai)
})

router.put("/", (req, res) => {
    let data = {
        Nama: req.body.Nama,
        Username: req.body.Username,
        Password: req.body.Password
    }

    let parameter = {
        NIK_pemilik: req.body.NIK_pemilik
    }

    let sql = "UPDATE pemilik SET ? WHERE ?";

    db.query(sql, [data, parameter], (error, result) => {
        let nilai = null;
        if (error) {
            nilai = {
                message: "Gagal."
            };
        } else {
            nilai = {
                message: "Berhasil mengupdate data dengan NIK ",
                Nama: data.Nama,
                Username: data.Username,
                Password: data.Password
            }
        }
        res.json(nilai)
    })
})

router.delete("/:NIK_pemilik", (req, res) => {
    let nilai = {
        NIK_pemilik: req.params.NIK_pemilik
    }

    let sql = "delete from pemilik where ?"

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