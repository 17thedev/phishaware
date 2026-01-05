const form = document.getElementById("loginForm");
const warning = document.getElementById("warning");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  form.style.display = "none";
  warning.classList.remove("hidden");
});
