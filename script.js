document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const formMessage = document.querySelector(".form-message");

  // Basic email validation
  if (email === "") {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thanks for signing up! Check your inbox to get started.";
    formMessage.style.color = "green";
    
    // Show Modal
    showModal();
  }
});

// Modal functionality
function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex"; // Show the modal

  document.querySelector(".close-modal").addEventListener("click", () => {
    modal.style.display = "none"; // Close the modal
  });
}

// Smooth Scroll for CTA
document.querySelector(".cta-btn").add
