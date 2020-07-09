const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const mailer = require('nodemailer');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.use(cors());
app.post("/usermail", async (request, response) => {
    const {sbcMail} = request.body;
    connection.query( `INSERT INTO subscribers(email) VALUES(?)`, [sbcMail]);
    const transport = mailer.createTransport({
        service:"Gmail",
        auth:{
            user:"rom.yatsynych@gmail.com",
            pass:"mdgnsfddfctywmia"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    await transport.sendMail({
        from: "rom.yatsynych@gmail.com",
        to:sbcMail,
        subject:"Subscribe",
        html:"<div><h1>Thank you for subscribe</h1></div>"
    });
    response.status(200).send({message: "success"})
});

http.listen(3000, () => {
    console.log('3000');
});