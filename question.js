const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 12345
const path = require('path')
var mysql = require('mysql')
app.use(express.static('../quizz (2)/Frontend'))
app.use(bodyParser.urlencoded({extended:false}));

app.set('views engine','pug')

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../quizz (2)/Quiz App Master', 'questions.html'));
 //Another Method to get from file path  
    //res.sendFile('questions.html', { root: path.join(__dirname, '../quizz (2)/Quiz App Master') });
});var mysql = require('mysql');
const { connect } = require('socket.io-client');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '  ',
  database: 'Quiz_db'
})

connection.connect((err)=>{
    if (err) throw err

    console.log('Connected..')
})



app.post('/submit', (req,res)=>{
    console.log(req.body);
//to send data into mysql db
    var sql = "insert into question values(null, '"+ req.body.question+"','"+ req.body.option1+"','"+ req.body.option2+"','"+ req.body.option3+"','"+ req.body.answer+"',)"

connection.query(function(err){
    if (err) throw err
    res.render('questions',{title: 'Data Saved',
    message: 'data saved' 
    })
})
connection.end();
})







app.listen(port,()=>console.log('listining on port 12345'))