let toggle = document.getElementById('darkmode');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-sun')) {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
});



let updatetime = () => {
    let now = new Date();
    let hours = now.getHours();
    let greet = '';
    if (hours >=5 && hours < 12) {
        greet = 'good moring sir/madam';
    } else if (hours >= 12 && hours < 16) {
        greet = 'good afternoon sir/madam';
    } else if (hours >= 16 && hours < 21) {
        greet = 'good evening sir/madam';
    } else {
        greet = 'good night sir/madam';
    }
    return greet;
};
let updatedate = () => {
    let show = new Date();
    let hours = show.getHours();
    let minites = show.getMinutes();
    let sceonds = show.getSeconds();
    let dateshow = show.toDateString();

    let timeshow = document.querySelector('#time').textContent = updatetime();
    let datashow = document.querySelector('#date').textContent = `${hours}:${minites}:${sceonds} ${dateshow}`;
}
updatedate();
setInterval(updatedate, 1200);

let typing=document.querySelector('#changetxt');
let type=()=>{
    setTimeout(() => {
        typing.textContent='developer';
    }, 0);
    setTimeout(() => {
        typing.textContent='youtuber';
    }, 4000);
    setTimeout(() => {
        typing.textContent='web scaper'
    }, 8000);

};
type();
setInterval(type,12000)

