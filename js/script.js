document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Smooth scroll para links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Formulário de contato
  const contactForm = document.getElementById('form-contato');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const button = this.querySelector('button');
      const originalText = button.innerHTML;
      
      button.innerHTML = 'Enviando...';
      button.disabled = true;
      
      setTimeout(() => {
        button.innerHTML = 'Mensagem Enviada!';
        setTimeout(() => {
          button.innerHTML = originalText;
          button.disabled = false;
          this.reset();
        }, 1500);
      }, 1000);
    });
  }
});