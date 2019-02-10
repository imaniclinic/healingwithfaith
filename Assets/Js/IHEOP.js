const sub = document.getElementsByClassName('colored_box');
window.addEventListener('scroll', () => {
  console.log(sub[1].offsetTop);
  console.log(window.scrollY);
  console.log(sub[0].offsetTop);
  if((window.scrollY > (sub[1].offsetTop/2)) && (window.scrollY < sub[1].offsetTop)) {
      sub[1].style.opacity = '1.0';
  } else {
      sub[1].style.opacity = '0.0';
  }

  if((window.scrollY > (sub[0].offsetTop/2)) && (window.scrollY < sub[0].offsetTop)) {
      sub[0].style.opacity = '1.0';
  } else {
      sub[0].style.opacity = '0.0';
  }
});
