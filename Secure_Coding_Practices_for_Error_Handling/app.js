const express = require('express');
const validator = require('validator');
const winston = require('winston');
const rateLimit = require('express-rate-limit');

// Initialize the app
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Winston logger configuration
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log' })
    ],
});

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max 100 requests per 15 minutes per IP
    message: 'Too many requests, please try again later.'
});

// Route: Serve the registration form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route: Handle form submission with rate limiting
app.post('/register', limiter, (req, res) => {
    const { username, email } = req.body;

    try {
        // Validate email
        if (!validator.isEmail(email)) {
            throw new Error('Invalid email format');
        }

        // Validate username (alphanumeric)
        if (!validator.isAlphanumeric(username)) {
            throw new Error('Username should contain only letters and numbers');
        }

        // If all validations pass
        res.send('Registration successful');

    } catch (error) {
        // Log the error using Winston
        logger.error(error.message, { timestamp: new Date().toISOString() });

        // Send a generic error message to the client
        res.status(400).send('An error occurred. Please try again.');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
