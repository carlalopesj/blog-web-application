import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas GET
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.get("/view", (req, res) => {
    res.render("view.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

//Métodos POST
app.post("/submit", (req, res) => {
    res.render("index.ejs",
    {
        title : req.body["title"],
        text : req.body["postxt"]
    });
})

//Abrir a porta*
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
