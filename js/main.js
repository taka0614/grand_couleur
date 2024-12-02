'use strict'

const arrowup = document.getElementById("arrowup");

const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');


arrowup.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// スクロールされたら表示
window.addEventListener("scroll", function () {
  // window.pageYOffset 現在の位置を取得
  if (window.pageYOffset > 100) {
    arrowup.classList.add("is-visible");
  } else {
    arrowup.classList.remove("is-visible");
  }
});


open.addEventListener('click', () => {
  arrowup.classList.add('hide');
  overlay.classList.add('show');
  open.classList.add('hide');
});

close.addEventListener('click', () => {
  arrowup.classList.remove('hide');
  overlay.classList.remove('show');
  open.classList.remove('hide');
});