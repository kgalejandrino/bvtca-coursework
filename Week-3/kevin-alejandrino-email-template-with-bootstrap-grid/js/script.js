const link = document.querySelectorAll('.my-link');
const card = document.querySelectorAll('.my-card');

link.forEach(element => {
    element.addEventListener('click', function() {
        link.forEach(element => {
            element.classList.remove('active');
        })
        this.classList.add('active');
    })
});

card.forEach(element => {
    element.addEventListener('click', function() {
        card.forEach(element => {
            element.classList.remove('card');
        })
        this.classList.add('card');
    })
});



