document.addEventListener('DOMContentLoaded', function() {
  // Get the carousel element
  var carousel = document.getElementById('carouselExampleControls');

  // Function to attach click events to flip-cards
  function attachFlipEvents() {
    var flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(function(card) {
      card.removeEventListener('click', flipCard);  // Remove existing event to prevent duplication
      card.addEventListener('click', flipCard);  // Attach new event
    });
  }

  // Initial attachment of click events
  attachFlipEvents();

  // Listen for the 'slid.bs.carousel' event
  carousel.addEventListener('slid.bs.carousel', function() {
    // Reset all flip-cards to their original state
    var flipCards = document.querySelectorAll('.flip-card-inner');
    flipCards.forEach(function(card) {
      card.style.transform = 'rotateY(0deg)';
    });

    // Re-attach click events after sliding
    attachFlipEvents();
  });
});

// Function to flip the card
function flipCard(event) {
  var innerCard = event.currentTarget.querySelector('.flip-card-inner');
  var isFlipped = innerCard.style.transform === 'rotateY(180deg)';
  innerCard.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
}




  