Here is a `README.md` that explains each code within the specified folders:

---

# Project Documentation

This repository contains examples and implementations of secure coding practices and various security-related concepts such as Buffer Overflow prevention, Database Security, Error Handling, and Input Validation.

## Table of Contents
- [Buffer Overflow](#Buffer_Overflow)
- [Database Security](#Database_Security)
- [Secure Coding Practices for Error Handling](#Secure_Coding_Practices_for_Error_Handling)
- [Secure Coding Practices for Input Validation](#Secure_Coding_Practices_for_Input_Validation)
- [Secure Coding Practices for Session Management](#Secure_Coding_Practices_for_Session_Management)
- [Test recap security](#Test_recap_security)
---

### Buffer Overflow

**Folder**: `buffer_overflow`

1. **Safe User Input Handling** (`safe_input.c`):
    - This example demonstrates safe user input handling using `fgets()` to prevent buffer overflow.
    - It reads a username and ensures that it does not exceed the buffer size.
    - Uses `strcspn` to remove any newline characters.

2. **Unsafe Input Handling** (`unsafe_input.c`):
    - Demonstrates unsafe input handling by using `gets()`, which can cause buffer overflow.
    - This code should be avoided in production environments due to security vulnerabilities.
  
3. **Safe String Copy and Dynamic Allocation** (`safe_string_copy.c`):
    - This code illustrates how to safely copy strings using `strncpy()` and dynamically allocate memory for formatted strings using `snprintf()` and `malloc()`.

---

### Database Security

**Folder**: `database_security`

1. **Login Form (Frontend)** (`login.html`):
    - A simple HTML form for user login.
    - It submits the user's credentials (username and password) via POST method to the server.

2. **Login Script (Backend)** (`login.php`):
    - PHP script to handle user login with connection to a MySQL database.
    - This script contains a vulnerability by directly embedding user input into an SQL query, which is susceptible to SQL Injection attacks.
    - It demonstrates the use of SQL statements to check for valid login credentials.

---

### Secure Coding Practices for Error Handling

**Folder**: `error_handling`

1. **Express Server with Input Validation and Logging** (`server.js`):
    - A Node.js application using Express and rate-limiting middleware.
    - This code validates the user's email and username input with the `validator` library.
    - Implements error handling and logging using the `winston` library to capture and log errors.
    - Demonstrates rate-limiting to protect against brute force attacks.

2. **Registration Form** (`index.html`):
    - A frontend registration form that sends a POST request to the server.
    - The form contains fields for username and email with basic client-side validation before sending the data to the server.

3. **Configuration File** (`package.json`):
    - Defines the project dependencies such as `express` and `validator`.
    - This file also specifies the scripts and version of the Node.js project.

---

### Secure Coding Practices for Input Validation

**Folder**: `input_validation`

1. **User Registration Form** (`registration.html`):
    - HTML form that allows users to register by entering personal information such as name, username, email, profile picture, and password.
    - This form includes client-side validation to ensure correct input format.

2. **Validation Script** (`validation.js`):
    - JavaScript file that provides comprehensive validation for user inputs.
    - Validates the following fields:
      - Name: Ensures that only letters and spaces are allowed.
      - Username: Only alphanumeric characters are allowed.
      - Email: Validates the format of the email.
      - Profile Picture: Ensures that only certain file types (`.jpg`, `.jpeg`, `.png`, `.gif`) are accepted.
      - Password: Must contain a mix of uppercase, lowercase, numbers, and special characters.
    - Displays error messages below each field when the input is invalid.
  

### Secure Coding Practices for Session Management

**Folder**: `session_management`

1. **Session Handling Script** (`session.php`):
    - A PHP script that demonstrates secure session management.
    - Utilizes `session_start()` to initiate a session and sets secure cookie parameters.
    - Implements session regeneration to prevent session fixation attacks.
    - Contains functionality to destroy the session upon user logout.

2. **Session Configuration** (`config.php`):
    - A configuration file that specifies settings for session handling, including session lifetime and storage settings.
    - Ensures that sensitive session data is not exposed and follows best practices for session security.

### Test Recap Security

**Folder**: `recaptcha_security`

1. **Login Form with reCAPTCHA (Frontend)** (`login.html`):
    - An HTML form that integrates Google reCAPTCHA for user authentication.
    - It includes fields for username and password, along with a reCAPTCHA widget to verify that the user is not a bot.
    - The form submits data via POST method to the server for processing.

2. **Login Script (Backend)** (`login.js`):
    - A Node.js script that handles login requests and verifies reCAPTCHA responses.
    - It checks whether the reCAPTCHA response is present and valid by making a request to Google's reCAPTCHA API.
    - Upon successful verification, it checks the username and password against hardcoded values (as a placeholder for real credential verification).
    - Implements error handling for reCAPTCHA verification failures and logs any errors that occur.

3. **Stylesheet** (`style.css`):
    - A CSS file that styles the login form for a clean and user-friendly interface.
    - It provides styles for the login box, input fields, buttons, and responsive design for various screen sizes.

---

## How to Run

1. **Buffer Overflow Examples**:
   - Compile the C code using GCC (or any other C compiler).
     ```bash
     gcc safe_input.c -o safe_input
     ./safe_input
     ```

2. **Database Security**:
   - Set up a local MySQL server.
   - Create a database `sample_app` and a table `users`.
   - Insert sample data and run the `login.php` script using a PHP server (e.g., XAMPP or LAMP stack).

3. **Secure Error Handling (Node.js)**:
   - Navigate to the `error_handling` folder and run:
     ```bash
     npm install
     node server.js
     ```

4. **Input Validation**:
   - Open the `registration.html` file in a web browser and interact with the form.
   - For server-side validation, integrate the `validation.js` with backend code (e.g., in a Node.js/Express or PHP server).

5. **Session Management**:
   - Open the `session.php` script in a PHP server environment to test session handling functionalities.
   - Ensure that session settings in `config.php` are configured correctly to enhance security.


6. **Test Recap Security**:
   - Set up a Node.js environment and install necessary dependencies.
   - Run the server script to test the login functionality with reCAPTCHA.
   - Access the login form through a web browser and attempt to log in using various inputs to verify the reCAPTCHA and login process.


## Notes

- Always ensure that proper input validation and error handling practices are followed in production environments to prevent security vulnerabilities.
- SQL injection, buffer overflow, and reCAPTCHA validation are common vulnerabilities that must be mitigated using safe coding practices.
- For more details on securing web applications, refer to OWASP's guidelines and best practices.

