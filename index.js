const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Backend training')
});

app.get("/api/v1/instagram",(req,res)=>{
    let instagram={
       name:"Shatabhishek",
       followers:100,
    }
    res.status(200).json(instagram);
}
);



app.get("/api/v1/:id",(req,res)=>{
  
    res.status(200).json({id:req.params.id});
}
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})