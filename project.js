// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here, you can add the logic to handle form submission, validation, and storing data.
    // For example, you can retrieve form values and perform actions accordingly.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;
  
    // Add your logic to handle this form data (validation, storage, etc.)
    // For now, let's log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Date of Birth:', dob);
    console.log('Terms Accepted:', termsAccepted);
  });
  