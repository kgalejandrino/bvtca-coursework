const link = document.querySelectorAll('.my-link');
const card = document.querySelectorAll('.my-card');

link.forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    })
});

card.forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.card').classList.remove('card');
        this.classList.add('card');
    })
});



