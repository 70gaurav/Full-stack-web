import  Express  from "express";
import bodyParser from "body-parser";
import connection from "./db/index.js";
import path from "path"


const app = Express()
app.use(bodyParser.json())
app.use(Express.static(path.join("../front" , "dist")))

app.get("/" , (req,res) => {
const indexPath = path.resolve("../front" , "dist" , "index.html")
res.sendFile(indexPath)
})

app.post("/" , (req , res) => {
    let data = req.body

    
    console.log(req.body)
    req.send(data)
})

connection.then(() => {
    app.listen(3000, () => console.log("server connected"))

}).catch((err) => {
    console.log(err)
})
