const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let comments = [];

app.get('/', (req, res) => {
    let commentsList = comments.map(c => `<p>${c}</p>`).join('');
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

app.listen(3002, () => {
    console.log('Stored Unsecure App running on http://localhost:3002');
});
