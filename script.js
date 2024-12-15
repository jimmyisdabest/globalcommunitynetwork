// Example JavaScript file for your website

document.addEventListener("DOMContentLoaded", function() {
  console.log("Website is ready!");

  // Example function to change background color
  const changeBgButton = document.getElementById('change-bg-button');
  if (changeBgButton) {
    changeBgButton.addEventListener('click', function() {
      document.body.style.backgroundColor = "#f0f8ff"; // light blue background
    });
  }

  // Example of a simple form submission handler
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      alert("Form submitted: " + formData.get('name')); // Alert the name field value
    });
  }
});
