// A.J CHAUHAN AUTO demo website
// Before publishing, replace the values below with your real business details.
const BUSINESS_PHONE = ""; // Example: "919876543210" (country code + number, digits only)
const BUSINESS_ADDRESS = ""; // Example: "Your full showroom address"

document.getElementById("year").textContent = new Date().getFullYear();
if (BUSINESS_PHONE) document.getElementById("phone-display").textContent = BUSINESS_PHONE;
if (BUSINESS_ADDRESS) document.getElementById("address-display").textContent = BUSINESS_ADDRESS;

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-interest]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("interest").value = link.dataset.interest;
  });
});

document.getElementById("enquiry-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const interest = String(form.get("interest") || "General enquiry");
  const message = String(form.get("message") || "").trim();
  const text = `Hello A.J CHAUHAN AUTO,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AInterested in: ${encodeURIComponent(interest)}%0AMessage: ${encodeURIComponent(message)}`;
  const status = document.getElementById("form-status");
  if (!BUSINESS_PHONE) {
    status.textContent = "Demo only: add your WhatsApp number in script.js to enable sending enquiries.";
    return;
  }
  window.open(`https://wa.me/${BUSINESS_PHONE}?text=${text}`, "_blank", "noopener,noreferrer");
  status.textContent = "Your enquiry has been prepared in WhatsApp.";
});
