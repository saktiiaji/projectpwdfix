document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    const navMenu = document.querySelector('.menu');
    const toggleLi = document.createElement('li');
    const themeToggleBtn = document.createElement('button');
    
    themeToggleBtn.id = 'tombol-tema';
    themeToggleBtn.textContent = 'Mode Gelap';
    
    toggleLi.appendChild(themeToggleBtn);
    navMenu.appendChild(toggleLi);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Mode Terang';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = 'Mode Terang';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = 'Mode Gelap';
        }
    });
});