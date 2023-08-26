function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  $(document).ready(function() {
    $('.btn btn-color-2').magnificPopup({type:'image'});
  });