const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const submitButton = form.querySelector("button");
const message = document.querySelector("#message");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

submitButton.addEventListener("click", () => {
  if (submitButton.type === "submit") return;

  emailInput.hidden = false;
  submitButton.type = "submit";
  submitButton.textContent = "Kirim";
  submitButton.setAttribute("aria-expanded", "true");
  emailInput.focus();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  message.textContent = `Terima kasih! Informasi akses gratis akan dikirim ke ${email}.`;
  form.reset();
});