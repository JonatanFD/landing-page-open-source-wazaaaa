document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel img');
    const buttons = document.querySelectorAll('.carousel-control');
    
    // Función para mostrar una diapositiva específica
    function showSlide(index) {
        // Oculta todas las diapositivas
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Desactiva todos los botones
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Muestra la diapositiva seleccionada
        slides[index].classList.add('active');
        
        // Activa el botón correspondiente
        buttons[index].classList.add('active');
    }
    
    // Añade event listeners a los botones
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Muestra la primera diapositiva al cargar
    showSlide(0);
}); 