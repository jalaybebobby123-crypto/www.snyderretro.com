document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  document.getElementById("confirmation").textContent =
    "✅ Thank you, " + name + "! Your order has been placed successfully.";
    
  // Optionally clear form
  e.target.reset();
});