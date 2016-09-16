import Counter from './components/counter';

const display = document.querySelector('.counter__display');
const increment = document.querySelector('.counter__action--increment');
const decrement = document.querySelector('.counter__action--decrement');

if (display && increment && decrement) {
    const counter = new Counter();

    increment.addEventListener('click', () => {
        display.innerText = counter.increase();
    });

    decrement.addEventListener('click', () => {
        display.innerText = counter.decrease();
    });
}
