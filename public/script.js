document.addEventListener('rendered', () => {
    function addObserver(element) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(element);
    }

    const elements = document.querySelectorAll('.fie');
    elements.forEach(el => {
        addObserver(el);
    });
});