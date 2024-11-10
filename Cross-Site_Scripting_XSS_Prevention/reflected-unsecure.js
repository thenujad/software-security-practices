const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="GET" action="/">
            <input type="text" name="query" />
            <button type="submit">Submit</button>
        </form>
        <p>${req.query.query || ''}</p>
    `);
});

app.listen(3000, () => {
    console.log('Reflected Unsecure App running on http://localhost:3000');
});
