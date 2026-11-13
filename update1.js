const LOCKED = false; // Change to true to lock everyone out!

if (LOCKED) {
  document.body.innerHTML = "<h1 style='margin-top: 20%;'>Maple is currently locked.</h1>";
} else {
  const banner = document.getElementById("live-announcement");
  if (banner) {
    banner.innerHTML = "<h2>Updated Announcement!</h2><p>Welcome to Maple!</p>";
  }
}
