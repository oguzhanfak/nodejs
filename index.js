const express = require("express")
const app = express()

app.set("view engine","ejs ")

app.use("/products/:id", (req, res)=> {
    // res.send(req.params)
    res.render("products" + req.params.id)
})
app.use("/products", (req, res)=> {
    res.render("products" + req.params.id)
})

app.use("/", function(req, res) {
    res.render("index")
})

app.listen(3000, ()=> {
    console.log("listening on port 3000")
})



app.listen(3000, ()=> {
    console.log("listening on port 3000")
})