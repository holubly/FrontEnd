let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 10, 10);
class сircle {
    constructor(selector) {
        this.el = document.querySelector('.circle');
        this.movement = Promise.resolve(true);
    }
    setPositiob(x, y) {
        this.el.style.transform = 'translate($(x)px, $(y)px) translate(-50%, -50%)';
        //Шарик будет центрироваться по центру мышки
    }
    move(x, y) {
        this.movement = this.movement
            .then(() => new Promise(resolve => {
                this.el.addEventListener('transitionend', () => resolve(true), { once: true });
                this.setPositiob(x, y);
            }));
    }
}
