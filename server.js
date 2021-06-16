const path = require('path');
const express = require('express');
const app = express();
const { conn, syncAndSeed, models: { Student_Profile } } = require('./db');

const PUBLIC_PATH = path.join(__dirname, './public');
const DIST_PATH = path.join(__dirname, './dist');

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

//write routes here

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});





const init = async() => {
    try {
        await conn.syncAndSeed();
        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(`Server listening on PORT: ${PORT}`);
        });
    }
    catch(err) {
        console.log(err);
    }
}

init();
//where routes are, where you can import in (require) into this file and use that in your route