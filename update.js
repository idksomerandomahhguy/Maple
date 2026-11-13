// This runs whenever someone opens the distributed HTML file
document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("remote-content");
  if (banner) {
    banner.innerHTML = "<h2>Updated Announcement!</h2><p>This text came from GitHub.</p>";
  }
});
