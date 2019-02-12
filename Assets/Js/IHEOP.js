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
