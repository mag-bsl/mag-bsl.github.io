
ScrollReveal().reveal('.Bigae-drugi', { duration: 1500, origin: 'right', distance: '1000px', reset: true, interval: 200, delay: 500 });
ScrollReveal().reveal('.Bigae-drugi-h2', { duration: 1500, origin: 'left', distance: '1000px', reset: true, interval: 200, delay: 500 });
ScrollReveal().reveal('.Bigae-drugi-p', { duration: 1500, origin: 'bottom', distance: '1000px', reset: true, interval: 200, delay: 500 });
ScrollReveal().reveal('.Bigae-treti-h2', { duration: 1500, origin: 'top', distance: '1000px', reset: true, interval: 200, delay: 500 });
ScrollReveal().reveal('.Bigae-card', { duration: 1500, origin: 'bottom', distance: '1000px', reset: true, interval: 200, delay: 500 });

let div2 = document.querySelector(".Blur")

window.addEventListener('load', function () {
    this.setTimeout(() => {
        div2.style.display = 'flex'
    }, 5000);
})

let btnclo = document.querySelector(".btn-close")

window.addEventListener('load', function () {
    this.setTimeout(() => {
        btnclo.style.display = 'block'
    }, 10000);
})
btnclo.onclick = function () {
    div2.style.display = 'none'
}
let btnpri = document.querySelector(".btnPrice")
btnpri.onclick = function () {
    div2.style.display = 'none'
}