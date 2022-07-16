'use strict'

window.addEventListener('load', rangeNum)
window.addEventListener('load', makePix)

const dask = document.querySelector('.dask');
const range = document.querySelector('.menu__range')
const colorPick = document.querySelector('.menu__color')
const resetBtn = document.querySelector('.menu__reset-btn')
const rainBow = document.querySelector('.menu__rainbow-btn')
const menu = document.querySelector('.menu')

function grid(column) {
    dask.style = `grid-template-columns: repeat(${column},1fr);`
}


function makePix() {
    let size = (Math.sqrt((500 * 500) / (range.value * range.value)));
    console.log(size)
    let column = Math.round(500 / size); 
    for (let i = 0; i < range.value * range.value; i++) {
        let pixels = document.createElement('div');
        pixels.classList.add('dask__item');
        dask.append(pixels)
        pixels.style.width = `${size}px`;
        pixels.style.height = `${size}px`;
    }
    console.log(column, size)
    grid(column);

}

function changeSize() {
    let pixels = document.querySelectorAll('.dask__item')
    pixels.forEach((item) => {
        item.remove();
    })
    makePix();
}

function rangeNum() {
    let pixelsCount = document.querySelector('.menu__range-num')
    pixelsCount.textContent = `${range.value} X ${range.value}`
}

function color(event, color) {

    if (event.target.closest('.dask__item')) {
        event.target.style.backgroundColor = `${colorPick.value}`
    }
}

function reset() {
    let pixels = Array.from(dask.children);
    pixels.forEach((item) => {
        item.style.backgroundColor = 'white'
    })
}

function rainbowColor(event) {
    let colorA = Math.trunc(Math.random() * 255);
    let colorB = Math.trunc(Math.random() * 255);
    let colorC = Math.trunc(Math.random() * 255);

    if (event.target.closest('.dask__item')) {
        event.target.style.backgroundColor = `rgb(${colorA},${colorB},${colorC})`
    }
}

function typeOfColor() {
    console.log('click')
    if (event.target.closest('.menu__color')) {
        dask.addEventListener('mouseover', color)
    } else if (event.target.closest('.menu__rainbow-btn')) {
        dask.addEventListener('mouseover', rainbowColor)
    } else {
        return;
    }
}

range.addEventListener('input', rangeNum)
range.addEventListener('mouseup', makePix)
range.addEventListener('input', reset)
range.addEventListener('click', changeSize)
resetBtn.addEventListener('click', reset)
menu.addEventListener('click', typeOfColor)