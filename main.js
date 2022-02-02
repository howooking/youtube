const moreBtnEl = document.querySelector('.info .moreBtn');
const title = document.querySelector('.info .title');
moreBtnEl.addEventListener('click', () => {
  title.classList.toggle('active');
  moreBtnEl.classList.toggle('active');
})