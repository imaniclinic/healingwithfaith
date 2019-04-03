window.onload = () => {
  toggle();
  scroll();
}

const scroll = () => {
  const sub = document.getElementsByClassName('colored_box');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < sub.length; i++) {
      if((window.scrollY > (sub[i].offsetTop/1.5)) && (window.scrollY < sub[i].offsetTop)) {
          sub[i].style.opacity = '1.0';
      } else {
          sub[i].style.opacity = '0.0';
      }
    }
  });
}
// navbar-dropdown probally changes the display. So set it to none or whatever it is called.
const toggle = () => {
  let burger = document.getElementsByClassName("navbar-burger")[0];
  let menu = document.getElementsByClassName("navbar-menu")[0];

  burger.addEventListener("click", () => {
    if (menu.className === "navbar-menu is-active")
    {
      menu.className = "navbar-menu";
    } else {
      menu.className = "navbar-menu is-active";
    }
  });
}
