'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer');
let upload = multer({dest: 'uploads/'});
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let file = req.file;
  console.log(file);
  res.json({
    fileName: file.originalname,
    fileSize: file.size
  })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
