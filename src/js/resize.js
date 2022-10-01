// Onload resize scale

window.addEventListener('load', () => {
    const content = document.querySelector('#content');

    content.style.transformOrigin = 'top left';
    window.addEventListener('resize', recalculateScale);

    function recalculateScale() {
        const windowHeight = window.innerHeight;
        content.style.transform = `scale(${windowHeight / content.offsetHeight})`;
    }
    
    recalculateScale();

    const getPixels = (percent) => {
        const screenHeight = window.innerHeight;
        return (screenHeight / 100) * percent;
      };
    
    document.body.style.minHeight = `${getPixels(100)}px`;

    // fix the mobile keyboard auto resize

    const sleep = m => new Promise(r => setTimeout(r, m))

    (async () => {

        await sleep(() => document.querySelector("meta[name=viewport]")
        .setAttribute("content", "height=" + screen.height * 0.9 + "px, width=device-width, initial-scale=1"), 300);
    
    })()

})

// viewport units on mobile

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

