const express = require('express');
const bodyParser = require('body-parser');
const xss = require('xss');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let comments = [];

app.get('/', (req, res) => {
    let commentsList = comments.map(c => `<p>${xss(c)}</p>`).join('');
    res.send(`
        <form method="POST" action="/">
            <input type="text" name="comment" />
            <button type="submit">Submit</button>
        </form>
        ${commentsList}
    `);
});

app.post('/', (req, res) => {
    comments.push(req.body.comment);
    res.redirect('/');
});

app.listen(3003, () => {
    console.log('Stored Secure App running on http://localhost:3003');
});
