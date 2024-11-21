document.getElementById("revealButton").addEventListener("click", () => {
  const message = document.getElementById("message");
  const button = document.getElementById("revealButton");

  if (message.classList.contains("hidden")) {
    message.classList.remove("hidden");
    button.textContent = "Enjoy Your Day!";
    button.style.backgroundColor = "#32cd32";
  }
});
