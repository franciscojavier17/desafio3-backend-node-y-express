import express from "express";
import { crearPost, getPosts } from "./db/index.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/posts", async(req, res) => {
    try {
        const posts = await getPosts()
        res.json(posts)
    } catch (error) {
        console.log(error)
    }
})

app.post("/posts", async(req, res) => { 
    const {titulo, imgSrc, descripcion} = req.body;
    try {
        const funcCrear = await crearPost({titulo, imgSrc, descripcion})
        res.json(funcCrear)
    } catch (error) {
        console.log(error)
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor listo en http://localhost:" + PORT);
})