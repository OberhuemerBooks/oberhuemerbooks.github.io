const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const rejectBtn = document.getElementById("reject-cookies");

if (banner && localStorage.getItem("cookiesAccepted") !== null) {
  banner.style.display = "none";
}

acceptBtn?.addEventListener("click", function () {
  localStorage.setItem("cookiesAccepted", "true");
  if (banner) banner.style.display = "none";
  location.reload();
});

rejectBtn?.addEventListener("click", function () {
  localStorage.setItem("cookiesAccepted", "false");
  if (banner) banner.style.display = "none";
});

// Ergänzt den Menüpunkt Blog automatisch auf allen bestehenden Seiten.
document.querySelectorAll("nav").forEach(function (nav) {
  if (!nav.querySelector('a[href="blog.html"], a[href="/blog.html"]')) {
    const link = document.createElement("a");
    link.href = "blog.html";
    link.textContent = "Blog";
    nav.appendChild(link);
  }
});

