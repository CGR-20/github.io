// Inject partials into header/footer
// this will allow me to avoid repeating code in multiple files
function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // inject header specific code
      if (id === "header") {
        const current = location.pathname.split("/").pop().replace(".html", "") || "index";

        // highlight the current page in the nav
        document.querySelectorAll(`#${id} nav a`).forEach(link => {
          if (link.dataset.page === current) link.classList.add("active");
        });
      }

      // inject footer specific code
      if (id === "footer") {
        // update the year in the footer automatically
        const yearEl = document.getElementById("year");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      }
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

// execute function when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "../partials/pages_header.html");
  loadPartial("footer", "../partials/footer.html");
});
