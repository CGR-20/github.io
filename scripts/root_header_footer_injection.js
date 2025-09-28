// Inject partials into header/footer
// this will allow me to avoid repeating code in multiple files
function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Only run after injection
      if (id === "header") {
        const current = location.pathname.split("/").pop().replace(".html", "") || "index";
        document.querySelectorAll(`#${id} nav a`).forEach(link => {
          if (link.dataset.page === current) link.classList.add("active");
        });
      }

      if (id === "footer") {
        const yearEl = document.getElementById("year");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      }
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

// execute function when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "partials/header.html");
  loadPartial("footer", "partials/footer.html");
});
