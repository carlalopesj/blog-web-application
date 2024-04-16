import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [] //Array para "armazenar" os posts

//Rotas GET
app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/write", (req, res) => {
    res.render("write.ejs");
});

//Métodos POST
app.post("/submit", (req, res) => {
    const newPost = {
        title: req.body["title"],
        text: req.body["postxt"]
    };
    posts.push(newPost);
    setTimeout(() => {    //Da um pequeno tempo de carregamento
        res.redirect("/");
    }, "100");
});



app.post("/delete/:index", (req, res) => { //Deletar um post
    const index = req.params.index;
    console.log(index);
    posts.splice(index, 1);
    res.redirect("/");
});

//Abrir a porta*
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
