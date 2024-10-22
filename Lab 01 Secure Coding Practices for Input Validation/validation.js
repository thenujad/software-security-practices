

function validationForm() {

    var name = document.getElementById["name"].value;
    var username = document.getElementById["username"].value;
    var email = document.getElementById["email"].value;
    var profilePic = document.getElementById["profilePicture"].value;
    var password = document.getElementById["password"].value;
    var gender = document.getElementById["gender"].value;
    var mobile = document.getElementById["mobileNumber"].value;
    var dob = document.getElementById["dob"].value;

   // Regular expressions for validation
    var nameRegex = /^[A-Za-z\s]+$/;
    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileRegex = /^[0-9]{10}$/;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Error messages palceholder
    var nameError = document.getElementById["nameError"];
    var usernameError = document.getElementById["usernameError"];
    var emailError = document.getElementById["emailError"];
    var profilePictureError = document.getElementById["profilePictureError"];
    var passwordError = document.getElementById["passwordError"];
    var genderError = document.getElementById["genderError"];
    var mobileNumberError = document.getElementById["mobileNumberError"];
    var dobError = document.getElementById["dobError"];

    // Flag to track from validity
    var isValid = true;


    //------------------- validation logic for each field -------------------//

    // Name validation
    if (name.trim() === "" || !nameRegex.test(name)) {
      nameError.textContent = "Name must contain capital & simple letters. spaces allowed.";
      isValid = false;
    }else{
      nameError.textContent = "";
    }

    // Username validation
    if (username.trim() === "" || !usernameRegex.test(username)) {
      usernameError.textContent = "Username must contain simple letters & numbers only can use as special character.";
      isValid = false;
    }else{   
        usernameError.textContent = "";
    }   

    // Email validation
    if (email.trim() === "" || !emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }else{
        emailError.textContent = "";
    }  
   

    // Profile picture validation
    if (profilePicture.trim() === "") { 
      profilePictureError.textContent = "Please upload a profile picture.";
      isValid = false;
    }else{
        if (!allowedExtensions.test(profilePicture)) {
            profilePictureError.textContent = "Please upload a valid profile picture (jpg, jpeg, png, gif).";
            isValid = false;
        }else{
            profilePictureError.textContent = "";
        }
    }

    
    // Password validation
    if (!passwordRegex.test(password)) {
      passwordError.textContent = "Password does not meet requirements.";
      isValid = false;
    }else{
        passwordError.textContent = "";
    }

    // Gender validation
    if (gender.trim() === "") {
      genderError.textContent = "Please select a gender."; 
        isValid = false;
    }else{
        genderError.textContent = "";
    }

     // Mobile number validation
    if (mobile.trim() === "" || !mobileRegex.test(mobileNumber)) {
      mobileNumberError.textContent = "Please enter a valid mobile number(10 digits).";
      isValid = false;
    }else{
        mobileNumberError.textContent = "";
    }
    


    // Date of birth validation
    if (dob.trim() === "") {
        dobError.textContent = "Date of birth is required.";
        isValid = false;
    }else{
        dobError.textContent = "";
    }

    return isValid;
}
