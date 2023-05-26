import pkg from "pg";
const {Pool} = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'likeme',
    password: 'udech',
    port: 5432,
    allowExitOnIdle: true,
});

export const getPosts = async() => {
    const {rows} = await pool.query("SELECT * FROM posts")
    return rows
}

export const crearPost = async({titulo, imgSrc, descripcion}) => {
    const comando = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *"
    const {rows} = await pool.query(comando,[titulo, imgSrc, descripcion])
    return rows
}