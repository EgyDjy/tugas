const express = require("express")
const router = express.Router()
const db = require("./koneksi")

router.get("/", (req, res) => {
    let sql = "select * from penyewa"

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
        NIK_penyewa: req.body.NIK_penyewa,
        Nama_penyewa: req.body.Nama_penyewa,
        Alamat_penyewa: req.body.Alamat_penyewa,
        No_Tlp: req.body.No_Tlp,
        Username: req.body.Username,
        Password: req.body.Password
    }
    let sql = "insert into penyewa set ?"

    db.query(sql, nilai, (error, result) => {
        let nilai = null
        if (error) {
            nilai = {
                message: "gagal"
            }
        } else {
            nilai = {
                message: result.affectedRows + " berhasil input",
                NIK_penyewa: data.NIK_penyewa,
                Nama_penyewa: data.Nama_penyewa,
                Alamat_penyewa: data.Alamat_penyewa,
                No_Tlp: data.No_Tlp,
                Username: data.Username,
                Password: data.Password
            }
        }

    })
    res.json(nilai)
})

router.put("/", (req, res) => {
    let data = {
        Nama_penyewa: req.body.Nama_penyewa,
        Alamat_penyewa: req.body.Alamat_penyewa,
        No_Tlp: req.body.No_Tlp,
        Username: req.body.Username,
        Password: req.body.Password
    }

    let parameter = {
        NIK_penyewa: req.body.NIK_penyewa
    }

    let sql = "UPDATE penyewa SET ? WHERE ?";

    db.query(sql, [data, parameter], (error, result) => {
        let nilai = null;
        if (error) {
            nilai = {
                message: "Gagal."
            };
        } else {
            nilai = {
                message: "Berhasil mengupdate data dengan NIK ",
                Nama_penyewa: data.Nama_penyewa,
                Alamat_penyewa: data.Alamat_penyewa,
                No_Tlp: data.No_Tlp,
                Username: data.Username,
                Password: data.Password
            }
        }
        res.json(nilai)
    })
})

router.delete("/:NIK_penyewa", (req, res) => {
    let nilai = {
        NIK_penyewa: req.params.NIK_penyewa
    }

    let sql = "delete from penyewa where ?"

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