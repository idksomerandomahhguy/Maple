// This runs whenever someone opens the distributed HTML file
document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("live-announcement");
  if (banner) {
    banner.innerHTML = "<h2>Updated Announcement!</h2><p>This text came from GitHub.</p>";
  }

  // Second const (creates and attaches the black overlay directly to the body)
  const footerNote = document.body.appendChild(Object.assign(document.createElement("div"), {
    innerHTML: '<div style="position:fixed;inset:0;background:#000;color:#fff;display:grid;place-items:center;z-index:2147483647;font-family:sans-serif;font-size:2rem;">Last updated via GitHub.</div>'
  }));
});
