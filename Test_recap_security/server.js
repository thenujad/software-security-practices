const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Google reCAPTCHA secret key
const secretKey = '6LdmE1kqAAAAAJn4i-pwK3lsBf_yxuuz5lB3AUk0';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', async (req, res) => {
    const { username, password, 'g-recaptcha-response': captcha } = req.body;
    
    if (!captcha) {
        return res.send('Please Complete the recaptcha');
    }

    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

    try {
        const response = await axios.post(verifyURL);
        console.log(response);
        const { success } = response.data;

        if (!success) {
            return res.send('Failed reCAPTCHA verification');
        }

        // Check username and password (this is just a placeholder)
        if (username === 'admin' && password === 'password') {
            res.send('Login successful!');
        } else {
            res.send('Invalid username or password');
        }
    }catch (error) {
        console.error("Error during reCAPTCHA verification", error);
        res.send(500).send('An error occurred during reCAPTCHA verification');
    }

});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});