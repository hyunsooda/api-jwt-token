const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const SECRET_KEY = 'secret';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dateSetup();


app.post('/api/auth', (req,res) => {
    const {id, pswd} = req.body;
    const token = jwt.sign({
        id,
        pswd,
    }, SECRET_KEY, { expiresIn: '2d' });

    res.json({
        token
    })
});

app.get('/api/currentTime', ensureToken, (req,res) => {
    res.json({
        date: new Date().format('yyyy년 MM월 dd일 E hh시 mm분 ss초')
    })
})  

function ensureToken(req, res, next) {
    let token = req.headers['authorization'];

    try {
        console.log(jwt.verify(token, SECRET_KEY));
        
        next();
    } catch(err) {
        console.log('invalid token');
        res.sendStatus(403);
    }
}

app.listen(3000, _=> console.log('server is running on port no.3000'));


function dateSetup() {
    Date.prototype.format = function(f) {
        if (!this.valueOf()) return " ";
    
        var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        var d = this;
        
        return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
            switch ($1) {
                case "yyyy": return d.getFullYear();
                case "yy": return (d.getFullYear() % 1000).zf(2);
                case "MM": return (d.getMonth() + 1).zf(2);
                case "dd": return d.getDate().zf(2);
                case "E": return weekName[d.getDay()];
                case "HH": return d.getHours().zf(2);
                case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
                case "mm": return d.getMinutes().zf(2);
                case "ss": return d.getSeconds().zf(2);
                case "a/p": return d.getHours() < 12 ? "오전" : "오후";
                default: return $1;
            }
        });
    };
    String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
    String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
    Number.prototype.zf = function(len){return this.toString().zf(len);};
}