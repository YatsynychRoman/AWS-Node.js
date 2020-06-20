const express = require('express');
const path = require('path')
const app = express();
const http = require('http').createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

http.listen(3000, () => {
    console.log('3000');
});

app.set('views', path.join(__dirname, 'static'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})