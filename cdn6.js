    direction = 'right'
    speed='50'
    position='fixed'
    size='100px'
    width='100vw'
    media_url='https://webstockreview.net/images/clipart-dinosaur-dinosaur-extinction-18.gif'
console.log("gif is loading");
     window.onload = function(){
               document.getElementById("mgif").innerHTML = `<div style="position: ${position};width:${width};z-index: 1000;"><marquee direction=${direction} scrollamount=${speed}><img src=${media_url} width=${size}></marquee></div>`
             }
console.log("gif loaded successfully");
