// Funcionalidade do formulário de contato
document.querySelector('.formulario-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Validação básica
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Simular envio
    console.log('Formulário enviado:', {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    });
    
    alert('Obrigado ' + nome + '! Sua mensagem foi enviada com sucesso!');
    
    // Limpar formulário
    this.reset();
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar animação ao carregar a página
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
