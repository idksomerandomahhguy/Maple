function runUpdates() {
  const banner = document.getElementById("live-announcement");
  if (banner) {
    banner.innerHTML = "<h2>Updated Announcement!</h2><p>This text came from GitHub.</p>";
  }

  // Change this to true to show the black screen, or false to hide it
  const showOverlay = true;

  if (showOverlay) {
    const footerNote = document.body.appendChild(Object.assign(document.createElement("div"), {
      textContent: "Last updated via GitHub.",
      style: "position:fixed;inset:0;background:#000;color:#fff;display:grid;place-items:center;z-index:2147483647;font-family:sans-serif;font-size:2rem;"
    }));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runUpdates);
} else {
  runUpdates();
}
