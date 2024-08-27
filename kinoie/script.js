
const heading =document.querySelector('#heading');

const keyframes = {
    opacity:[0,1],
    translate:['0 50px',0],
};

const option = {
    duration:3000,
    easing:'ease',
}

heading.animate(keyframes,option);

const ca = document.querySelectorAll('.cases');

// console.log(ca);

for(let i = 0; i < ca.length; i++){
    const keyframes={
        opacity:[0,1]
    };
    const options = {

        duration:4000,
        delay:i*300,
        fill:'forwards',
    };

ca[i].animate(keyframes, options);
}