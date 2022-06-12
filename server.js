const express = require('express');
const app = express();
const path = require('path')



const PORT = process.env.PORT || 3000

app.set('view engine','ejs');



app.get('/',(req,res)=>{
  res.render('index',{
    title: 'my home page'
  });
})

app.get('/about',(req,res)=>{
  res.render('about',{
    title: 'this is about master page'
  });
})

app.get('/download',(req,res)=>{
  res.download(path.resolve(__dirname)+"/index.html")
})
app.listen(PORT,()=>{
  console.log(`Server Started on Port ${PORT}`);
})

