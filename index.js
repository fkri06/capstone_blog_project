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

app.listen(port, () => {
    console.log(`Server is runin on port ${port}`);
});