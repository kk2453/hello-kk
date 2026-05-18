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

  // Escape key closes the panel
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && loginPanel.getAttribute("data-state") === "open") {
      closeLoginPanel();
    }
  });

  console.log("hello-kk — interactivity ready");
})();