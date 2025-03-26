document.addEventListener('DOMContentLoaded', () => {
    // Animação de entrada para os elementos
    const container = document.querySelector('.container');
    const profilePic = document.querySelector('.profile-pic');
    const heading = document.querySelector('h1');
    const bio = document.querySelector('.bio');
    const links = document.querySelectorAll('.link-btn');
    
    // Função para animar entrada dos elementos
    function animateElements() {
        setTimeout(() => profilePic.style.opacity = '1', 300);
        setTimeout(() => heading.style.opacity = '1', 600);
        setTimeout(() => bio.style.opacity = '1', 900);
        
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 1200 + (index * 100));
        });
    }
    
    // Inicializar estilos para animação
    profilePic.style.opacity = '0';
    heading.style.opacity = '0';
    bio.style.opacity = '0';
    
    links.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
    });
    
    // Iniciar animação
    animateElements();
    
    // Adicionar efeito de clique nos botões
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Não prevenir navegação para links externos
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Efeito visual de clique
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    console.log('Linktree carregado com sucesso!');
});