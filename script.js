// Botão de modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verificar se o modo escuro está salvo no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Modo Claro';
}

// Alternar modo escuro
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = 'Modo Escuro';
    }
});