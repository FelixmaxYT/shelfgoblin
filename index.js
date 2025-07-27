const express = require('express');
const app = express();
const port = 3000;

// serve static files from the 'static' directory on /static/
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/webfiles/index.html');
    });

    app.get('/scan', (req, res) => {
    res.sendFile(__dirname + '/webfiles/scan.html');
    });

    app.get("/cook", (req, res) => {
    res.sendFile(__dirname + '/webfiles/cook.html');
    });


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});