// viewport units on mobile

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

// fix the mobile keyboard auto resize

const sleep = m => new Promise(r => setTimeout(r, m))

(async () => {

    await sleep(() => document.querySelector("meta[name=viewport]")
    .setAttribute("content", "height=" + screen.height * 0.9 + "px, width=device-width, initial-scale=1"), 300);
   
})()