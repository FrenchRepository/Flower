// script.js
document.querySelectorAll('.petale').forEach(petale => {
    petale.addEventListener('click', (e) => {
      const colors = ['pink', 'red', 'blue', 'purple', 'orange'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      e.target.style.backgroundColor = randomColor;
    });
  });
  
  document.querySelector('.centre').addEventListener('click', () => {
    const petales = document.querySelectorAll('.petale');
    petales.forEach(petale => {
      petale.style.transform = `rotate(${Math.random() * 360}deg)`;
    });
  });
  // script.js
// Change les couleurs des pétales aléatoirement lorsqu'on clique dessus
document.querySelectorAll('.petale').forEach(petale => {
    petale.addEventListener('click', (e) => {
      const colors = ['pink', 'red', 'blue', 'purple', 'orange'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      e.target.style.backgroundColor = randomColor;
    });
  });
  
  // Ajoute une légère oscillation à la plante pour la rendre vivante
  function osciller() {
    const plante = document.querySelector('.plante');
    plante.style.transform = `rotate(${Math.sin(Date.now() / 500) * 2}deg)`;
    requestAnimationFrame(osciller);
  }
 osciller();
  