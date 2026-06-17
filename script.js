const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const rejectBtn = document.getElementById("reject-cookies");

if (localStorage.getItem("cookiesAccepted")) {
  banner.style.display = "none";
}

acceptBtn?.addEventListener("click", function () {
  localStorage.setItem("cookiesAccepted", "true");
  banner.style.display = "none";
  location.reload();
});

rejectBtn?.addEventListener("click", function () {
  localStorage.setItem("cookiesAccepted", "false");
  banner.style.display = "none";
});
