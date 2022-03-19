const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({
	extended:false
}))

app.use('/',(req,res,next)=>{
	next();
})

app.use(express.static(__dirname + '/Public'));

app.set('view engine','ejs');



app.get('/', (req, res) => {
    res.render('index');
})
app.post('/',(req,res)=>{
	console.log(req.body);
	res.render('index');
});

// app.get('/index.html', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// })
// app.get('/login.html',(req,res)=>{
// 	res.sendFile(__dirname + '/views/login.html');
// })


app.listen(3000,()=>{
	console.log("Running");
});