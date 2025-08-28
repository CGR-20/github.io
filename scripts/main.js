// Inject partials into header/footer
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

document.addEventListener("DOMContentLoaded", () => {
  const depth = location.pathname.includes("/pages/") ? "../" : "";
  loadPartial("header", depth + "partials/header.html");
  loadPartial("footer", depth + "partials/footer.html");
});
