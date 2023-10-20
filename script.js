function checkAnswer() {
    const answerInput = document.getElementById('answerInput');
    const flashcard = document.getElementById('flashcard');
  
    if (answerInput.value.toLowerCase() === 'paris') {
      flashcard.classList.add('correct');
      flashcard.classList.remove('incorrect');
    } else {
      flashcard.classList.add('incorrect');
      flashcard.classList.remove('correct');
    }
  }
  
  