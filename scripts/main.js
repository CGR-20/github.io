// Inject partials into header/footer
function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Highlight active link (after injection)
      const current = location.pathname.split("/").pop().replace(".html", "") || "index";
      document.querySelectorAll(`#${id} nav a`).forEach(link => {
        if (link.dataset.page === current) {
          link.classList.add("active");
        }
      });

      // Set year in footer if present
      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "/partials/header.html");
  loadPartial("footer", "/partials/footer.html");
});
