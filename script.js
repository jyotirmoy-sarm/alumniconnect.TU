// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const joinForm = document.querySelector("#contactForm");

    // Add submit event listener to the form
    joinForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Generate random 4-digit number
        const randomID = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000-9999

        // Combine prefix with the random number
        const alumniID = `ALUM${randomID}`;

        // Display the alumni ID in an alert
        alert(`Welcome to the community ,Your unique Alumni ID is: ${alumniID}`);

        // Optionally clear the form or handle further submission logic
        joinForm.reset();
    });
});

document.getElementById('contactForm 2').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
    
    // Reset the form
    this.reset();

   
});

document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    const Id = document.getElementById('Id').value;
    const password = document.getElementById('password').value;
    

    alert(`You are logged in!`);
    
    // Reset the form
    this.reset();

   
});
document.getElementById('merchandiseform').addEventListener('proceed to order', function(event) {
    event.preventDefault();
    const Id = document.getElementById('Id').value;
    const address = document.getElementById('address').value;
    

    alert(`Thank you your order has been recieved,we will shortly share the payment details on your registered email`);
    
    // Reset the form
    this.reset();

   
});
