const navbar = document.querySelector('.navbar-right');
document.querySelector('.menu').addEventListener('click', () => {
    navbar.classList.toggle('slide');
})

// Fade-in on Scroll
const sliders = document.querySelectorAll('.slide-in');
const fader = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin:'0px 0px -250px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

fader.forEach(fade => {
    appearOnScroll.observe(fade);
});
