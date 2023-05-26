import { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Post from "./components/Post";

import "./App.css";

const urlBaseServer = "http://localhost:3000";
axios.defaults.baseURL = urlBaseServer;

const App = () => {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState(""); 
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: posts } = await axios.get("/posts");
    setPosts([...posts]);
  };

  const agregarPost = async () => {
    const post = { titulo, imgSrc, descripcion };
    await axios.post("/posts", post);
    getPosts();
  };

  const like = async (id) => {
    await axios.put(`/posts/like/${id}`);
    getPosts();
  };

  const eliminarPost = async (id) => {
    await axios.delete(`/posts/${id}`);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post key={i} post={post} like={like} eliminarPost={eliminarPost} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;