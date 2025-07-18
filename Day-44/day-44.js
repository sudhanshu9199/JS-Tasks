let image1 = document.querySelector('.day-40-task1 #img1');
let image2 = document.querySelector('.day-40-task1 #img2');
let btn = document.querySelector('.day-40-task1 button');

btn.addEventListener('click', () => {
    let img1Src = image1.getAttribute('src');
    let img2src = image2.getAttribute('src');
    
    image1.setAttribute('src', img2src);
    image2.setAttribute('src', img1Src);
})

let h1 = document.createElement('h1');
h1.innerHTML = 'Totally created by JS'
console.log(h1);
let secondContainer = document.querySelector('.day-44-p');
secondContainer.appendChild(h1);

let img = document.createElement('img'); // created the tag
img.setAttribute('src', 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg') // adds the property with values
img.style.height = '35rem' // set the css

document.body.appendChild(img); // add the createElement in html



let task2 = document.querySelector('.day-44-task2');
let btn2 = document.createElement('button')


btn2.innerText = 'Click here';
btn2.setAttribute('class', 'btn2')
task2.appendChild(btn2);
console.log(btn2);
btn2.addEventListener('click', () => {
    let x = Math.random() * 90;
    let y = Math.random() * 90;
    let rot = Math.random() * 360;
    let image = document.createElement('img');

    image.setAttribute('src', 'Ben_10.png');
    image.setAttribute('class', 'img2')
    image.style.left = `${x}%`;
    image.style.top = `${y}%`;
    image.style.rotate = `${rot}deg`
    task2.appendChild(image);
})


let p2Box = document.querySelector('.day-44-p2 #box');
p2Box.addEventListener('click', () => {
    console.log('clicked on box');
})
p2Box.addEventListener('dblclick', () => {
    console.log('double clicked on box');
})
p2Box.addEventListener('mouseenter', () => {
    console.log('mouse Entered on box');
})
p2Box.addEventListener('mouseleave', () => {
    console.log('mouse left on box');
})
p2Box.addEventListener('mousemove', (dets) => {
    console.log('mouse moving on box', dets);
})
document.addEventListener('keydown', (dets) => {
    console.log('key press', dets);
})
document.addEventListener('keyup', (dets) => {
    console.log('key pressed', dets);
})
document.addEventListener('wheel', (dets) => {
    console.log('wheel moving', dets);
})
document.addEventListener('scroll', (dets) => {
    console.log('scrolling...', dets);
})
