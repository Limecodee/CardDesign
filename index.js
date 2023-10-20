document.addEventListener('DOMContentLoaded', (event) => {
  let flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach((card) => {
    card.addEventListener('click', function () {
      console.log("Card clicked!");  // This line will log a message to the console when the card is clicked
      let innerCard = this.querySelector('.flip-card-inner');
      innerCard.style.transform = innerCard.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
  });
});

