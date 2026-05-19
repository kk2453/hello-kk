// ============================================================
// hello-kk — interactivity script
// ============================================================

(function () {
  "use strict";

  // ============================================================
  // 1. Login panel (the gag)
  // ============================================================
  const loginButton = document.getElementById("login-button");
  const loginPanel = document.getElementById("login-panel");
  const loginPanelClose = document.getElementById("login-panel-close");
  const loginBackdrop = document.getElementById("login-backdrop");

  function openLoginPanel() {
    loginPanel.setAttribute("data-state", "open");
    loginPanel.setAttribute("aria-hidden", "false");
    loginBackdrop.setAttribute("data-state", "open");
    loginButton.setAttribute("aria-expanded", "true");
  }

  function closeLoginPanel() {
    loginPanel.setAttribute("data-state", "closed");
    loginPanel.setAttribute("aria-hidden", "true");
    loginBackdrop.setAttribute("data-state", "closed");
    loginButton.setAttribute("aria-expanded", "false");
  }

  loginButton.addEventListener("click", openLoginPanel);
  loginPanelClose.addEventListener("click", closeLoginPanel);
  loginBackdrop.addEventListener("click", closeLoginPanel);

<<<<<<< HEAD
  // Escape key closes the panel
=======
>>>>>>> 9670481ffa3cdbb76a9d2273c6787a07aca120ba
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && loginPanel.getAttribute("data-state") === "open") {
      closeLoginPanel();
    }
  });

<<<<<<< HEAD
=======
  // ============================================================
  // 2. Theme toggle
  // ============================================================
  const themeToggle = document.getElementById("theme-toggle");
  const themeOptions = themeToggle.querySelectorAll(".theme-toggle__option");

  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    updateToggleUI(theme);
  }

  function updateToggleUI(theme) {
    themeOptions.forEach(function (option) {
      const mode = option.getAttribute("data-mode");
      option.setAttribute("data-active", mode === theme ? "true" : "false");
    });
  }

  function toggleTheme() {
    const current = getCurrentTheme();
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  updateToggleUI(getCurrentTheme());
  themeToggle.addEventListener("click", toggleTheme);

  // ============================================================
  // 3. cf-ray live fetch
  // ============================================================
  const cfrayColo = document.getElementById("cfray-colo");
  const cfrayId = document.getElementById("cfray-id");

  async function fetchEdgeInfo() {
    try {
      const response = await fetch("/api/ray", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }

      const data = await response.json();

      const colo = data.colo || "unknown";
      const ray = data.ray || "unknown";
      const city = data.city && data.city !== "unknown" ? data.city : null;

      cfrayColo.textContent = city ? colo + " · " + city.toLowerCase() : colo;
      cfrayId.textContent = ray.split("-")[0];
    } catch (err) {
      cfrayColo.textContent = "offline";
      cfrayId.textContent = "open via cloudflare to see the edge node";
    }
  }

  fetchEdgeInfo();

>>>>>>> 9670481ffa3cdbb76a9d2273c6787a07aca120ba
  console.log("hello-kk — interactivity ready");
})();