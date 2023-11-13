// Email configuration

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("itnHyNd7JvizqyR1r");

  console.log("DOMContentLoaded event fired");
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  // Add a submit event listener to the form
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

      // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted");

    // Use the emailjs.sendForm method to send the form
    emailjs
      .sendForm("service_cm2dnwk", "template_s9h32mu", contactForm)
      .then(
        function(response) {
          console.log("Email sent successfully", response);
          successMessage.style.display = "block";
        },
        function(error) {
          console.log("Email sending failed", error);
          console.error(error);

          // Additional debugging information:
          if (error.response) {
            console.log("Response data:", error.response.data);
            console.log("HTTP status:", error.response.status);
            console.log("Headers:", error.response.headers);
          }
          errorMessage.style.display = "block";
        }
      );
  });
});