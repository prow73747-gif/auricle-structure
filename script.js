document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом анимации
    const animatedElements = document.querySelectorAll('.fade-in');

    // Настройки для Intersection Observer (отслеживание скролла)
    const observerOptions = {
        root: null, // следим относительно окна браузера
        rootMargin: '0px',
        threshold: 0.15 // элемент анимируется, когда виден на 15%
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс, запускающий CSS-анимацию
                entry.target.classList.add('visible');
                // Прекращаем наблюдение за уже появившимся элементом
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Запускаем наблюдение за каждой карточкой
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});