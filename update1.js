// This runs whenever someone opens the distributed HTML file
document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("live-announcement");
  if (banner) {
    banner.innerHTML = "<h2>Updated Announcement!</h2><p>This text came from GitHub.</p>";
  }
});
 
