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
   - Open the `registration.html` file in a web browser and interact with the form.
   - For server-side validation, integrate the `validation.js` with backend code (e.g., in a Node.js/Express or PHP server).

6. **Input Validation**:
   - Open the `registration.html` file in a web browser and interact with the form.
   - For server-side validation, integrate the `validation.js` with backend code (e.g., in a Node.js/Express or PHP server).


## Notes

- Always ensure that proper input validation and error handling practices are followed in production environments to prevent security vulnerabilities.
- SQL injection and buffer overflow are common vulnerabilities that must be mitigated using safe coding practices.
- For more details on securing web applications, refer to OWASP's guidelines and best practices.

