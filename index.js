let menubar = document.getElementById("menubar");

menu.addEventListener("click", () => {
    menubar.style.display = "flex";
  })

exit.addEventListener("click", () => {
  menubar.style.display = "none";
})