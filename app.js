var menu = document.getElementById('menu');
var nav = document.querySelector('#Navbar ul');
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

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        backTop.classList.add('active');
    } else {
        backTop.classList.remove('active');
    }
});
