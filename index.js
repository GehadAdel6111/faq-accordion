function toggleParagraph(event) {
    const button = event.target; 
    const paragraph = button.parentElement.nextElementSibling; 
  
    if (paragraph && paragraph.classList.contains('answer')) {
      paragraph.classList.toggle('hidden'); 
      button.textContent = button.textContent === '-' ? '+' : '-'; 
    }
    if (paragraph && paragraph.classList.contains('answer_showen')) {
        paragraph.classList.toggle('visible'); 
        button.textContent = button.textContent === '+' ? '-' : '+'; 
      }
  }
  
  const toggleButtons = document.querySelectorAll('.toggle_btn'); 
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', toggleParagraph);
  });
  