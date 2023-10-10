window.sr = ScrollReveal({ reset: true});
    sr.reveal('.fotos', {
         duration: 2000,
         rotate: {x:0, y: 80, z:0}
    });

    ScrollReveal().reveal('.h1-style', { duration: 2000, // duração da animação em milissegundos
    origin: 'top', // de onde a animação deve vir ('left' para da esquerda para a direita)
    distance: '200px', // distância do deslocamento
    delay: 200 });