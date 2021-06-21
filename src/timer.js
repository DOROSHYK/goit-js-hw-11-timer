// class CountdownTimer {
//     constructor({ selector, targetDate }) {
//         this.selector = selector;
//         this.targetDate = targetDate;
//    this.refs = {
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     mins: document.querySelector('span[data-value="mins"]'),
//     secs: document.querySelector('span[data-value="secs"]'),

// } 
//     }
    
// timer = {
//     start() {
//         const startSale = Date.now();
//         // console.log(startSale);
//         setInterval(() => {
//             const targetDate = Date.now();
//             const deltaTime = startSale - targetDate;
//             const components = convertTime(deltaTime);
//             console.log(components);
//         }, 1000)
//     }
// }






// }

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),

}

const timer = {
    start() {
        const startSale = Date.now();
        console.log(startSale);
        const interId = setInterval(() => {
            const targetDate = new Date('Jul 22, 2021').getTime();
            const deltaTime = targetDate - startSale;
            // const targetDate = Date.now();
            // const deltaTime = targetDate - startSale;
            const components = convertTime(deltaTime);
            console.log(components);
          
        }, 1000)
    }
}

// timer.start();

function convertTime(time) {
const days = formDate(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = formDate(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = formDate(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = formDate(Math.floor((time % (1000 * 60)) / 1000));   
    return {days, hours, mins, secs};
}

function formDate(value) {
    return String(value).padStart(2, '0');
};

function clockFace({ days, hours, mins, secs }) {
   refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}



















// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 22, 2021'),
// });