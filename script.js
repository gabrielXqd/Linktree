document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Verifica se os elementos do cursor existem
    if (!cursor || !cursorFollower) return;
    
    // Esconde o cursor padrão
    document.body.style.cursor = 'none';
    
    // Variáveis para suavizar o movimento do cursor
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    // Atualiza a posição do cursor quando o mouse se move
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Atualiza a posição do cursor principal imediatamente
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Efeito de hover em links e botões
    const links = document.querySelectorAll('a, button, .btn, .project-card, .social-link');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.style.width = '0px';
            cursor.style.height = '0px';
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
            cursorFollower.style.borderWidth = '2px';
            cursorFollower.style.opacity = '0.8';
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
            cursorFollower.style.borderWidth = '1px';
            cursorFollower.style.opacity = '0.5';
        });
    });
    
    // Função de animação para o cursor follower (efeito de atraso)
    function animate() {
        // Calcula a posição do cursor follower com efeito de suavização
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        // Atualiza a posição do cursor follower
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    // Inicia a animação
    animate();
    
    // Esconde os cursores quando o mouse sai da janela
    document.addEventListener('mouseout', function(e) {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        }
    });
    
    // Mostra os cursores quando o mouse entra na janela
    document.addEventListener('mouseover', function() {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '0.5';
    });
});