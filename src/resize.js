const sleep = m => new Promise(r => setTimeout(r, m))

// fix the mobile browser scale problem

const content = document.querySelector('#content');
content.style.transformOrigin = 'top left';

window.addEventListener('resize', recalculateScale);

function recalculateScale() {
const windowHeight = window.innerHeight;
content.style.transform = `scale(${windowHeight / content.offsetHeight})`;
}

recalculateScale();

// fix the mobile keyboard auto resize

(async () => {

    await sleep(() => document.querySelector("meta[name=viewport]")
    .setAttribute("content", "height=" + screen.height * 0.9 + "px, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"), 300);
   
})()