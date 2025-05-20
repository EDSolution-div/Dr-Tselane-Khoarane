var menu = document.getElementById('menu');
var nav = document.querySelector('#Navbar ul');
let faq = document.querySelectorAll('.FAQ-container .Faq');
const backTop = document.querySelector('.backTop');
let counts = document.querySelectorAll(".count");
let interval = 5000;

counts.forEach((count) => {
    let startValue = 0;
    let endValue = parseInt(count.getAttribute("data-target"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        count.textContent = startValue;
        if ( startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


menu.onclick = function() {
    menu.classList.toggle('open-menu');
    nav.classList.toggle('view')
};

faq.forEach(Faq => {
    
    let heading = Faq.querySelector('.heading');
    let icon = Faq.querySelector('.heading i');

    heading.onclick = () => {
        for(var i = 0; i < faq.length; i++){
            if(faq[i] != Faq){
                faq[i].classList.remove('active');
            } else {
                Faq.classList.toggle('active');
            }
        }
    };
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        backTop.classList.add('active');
    } else {
        backTop.classList.remove('active');
    }
});
