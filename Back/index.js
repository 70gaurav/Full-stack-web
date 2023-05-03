import express from "express";
import bodyParser from "body-parser";
import connection from "./db/index.js";
import path from "path"
import Post from "./db/models/post.js";


const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join("../front", "dist")))

app.get("/", (req, res) => {
    const indexPath = path.resolve("../front", "dist", "index.html")
    res.sendFile(indexPath)
})



app.post("/api/addPost", async (req, res) => {
    let data = req.body
    console.log(data)
    const postData = new Post(data)
    await postData.save()
})
// app.get("/api/posts")
connection.then(() => {
    app.listen(3000, () => console.log("server connected"))

}).catch((err) => {
    console.log(err)
})
