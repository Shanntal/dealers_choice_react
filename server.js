const path = require('path');
const express = require('express');
const app = express();
const { syncAndSeed, Student_Profile } = require('./db');

const PUBLIC_PATH = path.join(__dirname, './public');
const DIST_PATH = path.join(__dirname, './dist');

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

//write routes here
app.get('/api', async(req, res, next) => {
    const data = await Student_Profile.findAll();
    res.send(data);
})


app.get('/', (req, res, next) => {
  //res.send('hello');
  res.sendFile(path.join(__dirname, './public/index.html'));
});





const init = async() => {
    try {
        await syncAndSeed();
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server listening on PORT: ${PORT}`);
        });
    }
    catch(err) {
        console.log(err);
    }
}

init();
//where routes are, where you can import in (require) into this file and use that in your route