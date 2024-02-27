var icon = document.getElementById("icon");
var moon = document.getElementsByClassName(".bxs-moon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.innerHTML = "<i class='bx bxs-sun'></i>";
  } else {
    icon.innerHTML = "<i class='bx bxs-moon'></i>";
  }
};
