const express = require('express')
require('dotenv').config()
const sequelize = require('./db')

const PORT = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.send('ащолывавыа12345')
})

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log('ок')
        })
    }catch (e){
        console.log(e)
    }
}

start()

