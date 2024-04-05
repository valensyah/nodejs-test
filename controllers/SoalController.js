const db = require('../config/db_config')

exports.soalSatu = (req, res) => {
    console.log('test')
    const { home } = req.body
    console.log(req.body)
    const homeDirection = [
        {
            home: 'A',
            steps: [
                'MASUK [IN]',
                'BELOK KIRI',
                'MAJU TIGA LANGKAH',
                'BELOK KANAN',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'B',
            steps: [
                'MASUK [IN]',
                'BELOK KIRI',
                'MAJU DUA LANGKAH',
                'BELOK KANAN',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'C',
            steps: [
                'MASUK [IN]',
                'BELOK KIRI',
                'MAJU SATU LANGKAH',
                'BELOK KANAN',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'D',
            steps: [
                'MASUK [IN]',
                'LURUS',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'E',
            steps: [
                'MASUK [IN]',
                'BELOK KANAN',
                'MAJU SATU LANGKAH',
                'BELOK KIRI',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'F',
            steps: [
                'MASUK [IN]',
                'BELOK KANAN',
                'MAJU SATU LANGKAH',
                'BELOK KANAN',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'H',
            steps: [
                'MASUK [IN]',
                'BELOK KIRI',
                'MAJU SATU LANGKAH',
                'BELOK KIRI',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'I',
            steps: [
                'MASUK [IN]',
                'BELOK KIRI',
                'MAJU DUA LANGKAH',
                'BELOK KIRI',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
        {
            home: 'J',
            steps: [
                'MASUK [IN]',
                'BELOK KIRI',
                'MAJU TIGA LANGKAH',
                'BELOK KIRI',
                'MASUK RUMAH',
                'SAMPAI'
            ]
        },
    ]
    console.log('01')
    const step = homeDirection.filter(item => item.home === home.toUpperCase());
    console.log('11')
    if (!step || step.length === 0) {
        return res.render('home', {
            home: '',
            // data: null
            data: ['Rumah tujuan tidak ditemukan!']
        })
    }

    res.render('home', {
        home: '',
        // data: null
        data: step[0].steps
    })
},

exports.soalTiga = (req, res) => {
    const sql = "SELECT * FROM Customer";
    db.query(sql, (err, result) => {
        console.log(err)
        if (err) res.json({ msg: 'Terjadi kesalahan pada sistem!', data: [] })
        return res.json({
            msg: "Berhasil mendapatkan data!",
            data: result
        })
    })
}