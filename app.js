const ratingCard = document.querySelectorAll('.rating span');
const subBtn = document.querySelector('.submit');
const ratePoint = document.getElementById('rate');
const ratingSection = document.querySelector('.rating-section');
const thanksSection = document.querySelector('.thanks-section');

let rate = '';

ratingCard.forEach((ratingCard) => {
  ratingCard.addEventListener('click', (e) => {
    const active = document.querySelector('.checked');
    if (active) {
      active.classList.remove('checked');
    }
    const card = e.target;
    card.classList.add('checked');
    rate = e.target.innerText;
  });
});

subBtn.addEventListener('click', () => {
  if (rate) {
    ratePoint.innerText = rate;
    ratingSection.classList.add('hidden');
    thanksSection.classList.remove('hidden');
  }
});
