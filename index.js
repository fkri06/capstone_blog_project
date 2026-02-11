import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.get("/createBlog", (req, res) => {
    res.render('createBlog.ejs');
});

app.post("/createBlog", (req, res) => {
    const title = req.body.titleBox;

    // split the paragraphs by checking a new line and add it to array of strings,
    // then remove any '\r' and empty string.
    let paragraphs = req.body.contentBox.split("\n");
    paragraphs = paragraphs.filter(content => content !== '\r' && content !== '');

});

app.listen(port, () => {
    console.log(`Server is runin on port ${port}`);
});