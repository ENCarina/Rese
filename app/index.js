/*
* File: index.js
* Author: Nagy Etelka
* Copyright: 2025, Nagy Etelka
* Group: Szoft II-E
* Date: 2025-10-21
* Github: https://github.com/ENCarina
* License: MIT
*/

import express from 'express'
import router from './routes/api.js'

const app = express()

app.use(`/api`, router)

const PORT = 8000
app.listen(PORT, () => {
    console.log('Listening on port: ${PORT}')
})