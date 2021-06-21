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
    
// 
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
// 






// }

// const refs = {
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     mins: document.querySelector('span[data-value="mins"]'),
//     secs: document.querySelector('span[data-value="secs"]'),
//     btn: document.querySelector('button')

// }

// const timer = {
//     start() {
//         const startSale = Date.now();
//         console.log(startSale);
//         const interId = setInterval(() => {
//             const targetDate = new Date('Jul 22, 2021').getTime();
//             const deltaTime = targetDate - startSale;
//             // const targetDate = Date.now();
//             // const deltaTime = targetDate - startSale;
//             const components = convertTime(deltaTime);
//             console.log(components);
          
//         }, 1000)
//     }
// }

// timer.start();

// function convertTime(time) {
// const days = formDate(Math.floor(time / (1000 * 60 * 60 * 24)));
// const hours = formDate(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// const mins = formDate(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// const secs = formDate(Math.floor((time % (1000 * 60)) / 1000));   
//     return {days, hours, mins, secs};
// }

// function formDate(value) {
//     return String(value).padStart(2, '0');
// };

// function clockFace({ days, hours, mins, secs }) {
//    refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.mins.textContent = mins;
//     refs.secs.textContent = secs;
// }

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.intervalId = null;
        this.refs = {
            days: this.selector.querySelector('[data-value="days"]'),
            hours: this.selector.querySelector('[data-value="hours"]'),
            mins: this.selector.querySelector('[data-value="mins"]'),
            secs: this.selector.querySelector('[data-value="secs"]'),
        }
        this.init();
        this.start();
    }

    init() {
        const timeParts = this.getTimeParts(0);
        this.renderRefs(timeParts);
    }

    start() {
        this.intervalId = setInterval(() => {
            const time = this.targetDate - Date.now();
            if (time <= 0) {
                clearInterval(this.intervalId);
                return;
            }

            const timeParts = this.getTimeParts(time);
            this.renderRefs(timeParts);
        }, 1000)
    }

    renderRefs({days, hours, mins, secs}){
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    getTimeParts(time)
    {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return {days, hours, mins, secs};
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}





new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 22, 2021'),
});