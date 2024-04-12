document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.querySelector(".signup_email");
  const errorMessage = document.querySelector(".error-message");
  const subscribeButton = document.querySelector(".signup_button");
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close");

  subscribeButton.addEventListener("click", function(event) {
    event.preventDefault();
    const email = emailInput.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (isValid) {
      modal.style.display = "block";
      emailInput.classList.remove("invalid");
      errorMessage.style.display = "none";
    } else {
      emailInput.classList.add("invalid");
      errorMessage.style.display = "block";
    }
  });

  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});