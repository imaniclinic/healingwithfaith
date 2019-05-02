window.onload = () => {
  hoverText();
  nav();
  toggle();
  // scroll();
}

// const scroll = () => {
//   const sub = document.getElementsByClassName('colored_box');
//   window.addEventListener('scroll', () => {
//     for (let i = 0; i < sub.length; i++) {
//       if((window.scrollY > (sub[i].offsetTop/2)) && (window.scrollY < sub[i].offsetTop)) {
//           sub[i].style.opacity = '1.0';
//       } else {
//           sub[i].style.opacity = '0.0';
//       }
//     }
//   });
// }

const toggle = () => {
  let burger = document.getElementsByClassName("navbar-burger")[0];
  let menu = document.getElementsByClassName("navbar-menu")[0];
  let items = document.getElementsByClassName("navbar-dropdown");

  burger.addEventListener("click", () => {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }

    if (menu.className === "navbar-menu is-active")
    {
      menu.className = "navbar-menu";
    } else {
      menu.className = "navbar-menu is-active";
    }
  });

  document.addEventListener("mousemove", () => {
    if (window.innerWidth > 1088) {
      for (let i = 0; i < items.length; i++) {
        items[i].removeAttribute("style");
      }

      menu.className = "navbar-menu";
    }
  });
}

const nav = () => {
  let menu = document.getElementsByClassName("navbar-menu")[0];
  let dropDowns = document.getElementsByClassName("navbar-link");
  let items = document.getElementsByClassName("navbar-dropdown");

  for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", () => {
        if (items[i].style.display == "block") {
          items[i].style.display = "none";
        } else {
          items[i].style.display = "block";
        }
    });
  }
}

const hoverText = () => {
  let classname = document.getElementsByClassName("subtitle");
  let text = document.getElementsByClassName("about");

  for (let i = 0; i < classname.length; i++) {
    classname[i].addEventListener("mouseover", () => {
      classname[i].style.display = "none";
      text[i].style.display = "block";
      setTimeout(() => {
        classname[i].style.display = "block";
        text[i].style.display = "none";
      }, 10000);
    });
  }
}
