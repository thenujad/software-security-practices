const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up session
app.use(session({
    secret: 'yourSecretKey', // Use a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, // Mitigates XSS
        secure: true, // Ensures the browser only sends the cookie over HTTPS
        maxAge: 60000 // Session expiration time in milliseconds
    }
}));

// Set the view engine to ejs for rendering the UI
app.set('view engine', 'ejs');


// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        req.session.user = username;
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password');
    }
});

// Protected route
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}!`);
    } else {
        res.send('Please login to view this page');
    }
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error logging out');
        }
        res.send('Logout successful!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});