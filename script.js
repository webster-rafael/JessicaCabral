function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        img.setAttribute("src", "imagens/Jessica-2.png")
    } else {
        img.setAttribute("src", "imagens/Jessica-Profile.png")
    }

    }

    window.sr = ScrollReveal({ reset: true});
    sr.reveal('.project-h1', {
         duration: 2000,
         rotate: {x:0, y: 80, z:0}
    });

    ScrollReveal().reveal('.lista-1', { duration: 2000, // duração da animação em milissegundos
    origin: 'left', // de onde a animação deve vir ('left' para da esquerda para a direita)
    distance: '200px', // distância do deslocamento
    delay: 200 });

    ScrollReveal().reveal('.lista-2', { duration: 3000, // duração da animação em milissegundos
    origin: 'right', // de onde a animação deve vir ('left' para da esquerda para a direita)
    distance: '200px', // distância do deslocamento
    delay: 200 });

    ScrollReveal().reveal('.social-1', { duration: 2000, // duração da animação em milissegundos
    origin: 'bottom', // de onde a animação deve vir ('left' para da esquerda para a direita)
    distance: '200px', // distância do deslocamento
    delay: 200 });

    ScrollReveal().reveal('.fotos', { duration: 2000, // duração da animação em milissegundos
    origin: 'left', // de onde a animação deve vir ('left' para da esquerda para a direita)
    distance: '200px', // distância do deslocamento
    delay: 200 });