const express = require('express');
const bodyParser = require('body-parser');
const escapeHtml = require('escape-html');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="GET" action="/">
            <input type="text" name="query" />
            <button type="submit">Submit</button>
        </form>
        <p>${escapeHtml(req.query.query || '')}</p>
    `);
});

app.listen(3001, () => {
    console.log('Reflected Secure App running on http://localhost:3001');
});
