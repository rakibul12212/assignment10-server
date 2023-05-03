
const express = require("express");
const app = express();
const cors=require("cors")
const port = 8000;
app.use(cors())
const recipesdata=require('./data/RecipesData.json')
const chefsdata=require('./data/data.json')

app.get("/", (req, res) => {
  res.send("Chefsmate server running...");
});
app.get('/recipes',(req,res)=>{
    res.send(recipesdata);
})
app.get('/chefs',(req,res)=>{
    res.send(chefsdata);
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefsdata.find(chefdata => chefdata.id === id);
    res.send(selectedChef);
});

app.listen(port, () => {
  console.log( `Chefsmate server running on port ${port}!`);
});