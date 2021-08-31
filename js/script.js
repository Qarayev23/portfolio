new TypeIt("#element2", {
    speed: 150,
    loop: true
}).go();

new TypeIt("#element", {
    speed: 150,
    loop: true
}).go();


gsap.from(".navbar-brand", { opacity: 0, duration: 0.5, delay: 0.5, y: -30 });
gsap.from(".navbar-toggler", { opacity: 0, duration: 0.5, delay: 0.5, y: -30 });
gsap.from("#banner .row", { opacity: 0, duration: 1, delay: 0.5, x: -200 });
gsap.from(".nav-item", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    y: 30,
    stagger: 0.2,
});
gsap.from(".icons span", {
    opacity: 0,
    duration: 1,
    delay: 4,
    x: -30,
});


ScrollReveal().reveal('.card', {
    duration: 1300,
    distance: "50px",
    interval: 500,
});

ScrollReveal().reveal('.left', {
    duration: 1300,
    origin: "left",
    distance: "100px",
    interval: 500,
});

ScrollReveal().reveal('.right', {
    duration: 1000,
    origin: "right",
    distance: "100px",
    interval: 500,
});

function scrollTop() {
    const scrollTop = document.querySelector(".scroll-up")

    if (scrollY >= 560) {
        scrollTop.classList.add("show-scroll")
    } else {
        scrollTop.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollTop)

const navItem = document.querySelectorAll(".nav-item")
navItem.forEach((el) => {
    el.onclick = () => {
        document.querySelector(".navbar-toggler").click()
    }
})

$(document).ready(function () {
    var Animation = function (animationBar, percentage) {

        this.animationBar = animationBar;
        this.percentage = percentage;
        this.animationArray = null;
        this.animationOffset = null;
        this.percentageArray = null;
        this.index = 0;

        this.initialize();

    };

    Animation.prototype.initialize = function () {

        this.animationArray = document.getElementsByClassName(this.percentage);

        if (this.animationOffset === null)
            this.animationOffset = [];

        if (this.percentageArray === null)
            this.percentageArray = [];

        this.setUpElements();

    };

    Animation.prototype.setUpElements = function () {

        for (var i = 0; i < this.animationArray.length; i++) {
            var elem = this.animationArray[i],
                offset = elem.offsetTop + document.getElementsByClassName(this.percentage)[0].clientHeight,
                percentage = $(this.animationArray[i]).data(this.percentage);

            this.animationOffset.push(offset);
            this.percentageArray.push(percentage);
        }

        this.attachListeners();
    }

    Animation.prototype.attachListeners = function () {

        $(window).on('scroll', this.onWindowScroll.bind(this));
    };

    Animation.prototype.onWindowScroll = function () {

        for (var i = 0; i < this.animationArray.length; i++) {
            if (window.pageYOffset >= this.animationOffset[this.index] - window.innerHeight) {
                this.showElement();
                this.index++;
            } else
                return;
        }
    };

    Animation.prototype.showElement = function () {
        var element = document.getElementsByClassName(this.percentage)[this.index];
        element.className += ' show2';
        this.animateBar(element, this.percentageArray[this.index]);
    }

    Animation.prototype.animateBar = function (element, width) {

        var $element = $(element),
            className = ' p' + width;

        $element.find(this.animationBar).addClass(className);
    }

    new Animation('.animation-bar', 'percentage');

});