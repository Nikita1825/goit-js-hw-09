

import flatpickr from 'flatpickr';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// const calendar = document.getElementById(`datetime-picker`);
// const startBtn = document.querySelector(`[data-start]`);
// const timer = document.querySelector(`.timer`);
// const fields = document.querySelectorAll(`.field`);
// const days = document.querySelector(`[data-days]`);
// const hours = document.querySelector('[data-hours]');
// const minutes = document.querySelector('[data-minutes]');
// const seconds = document.querySelector(`[data-seconds]`);


// let timerInterval = null;
// startBtn.setAttribute(`disabled`, true);

// timer.style.display = 'flex';
// fields.forEach(field => {
//   // adding CSS markup to fields
//   field.style.display = 'flex';
//   field.style.flexDirection = 'column';
//   field.style.margin = '5px';
//   field.style.textAlign = 'center';
// });
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
// function padStart(value) {
//   return String(value).padStart(2, '0'); // adding zeroes if value < 10
// }
// function onScreenLoad(object) {
//   // function for on-screen output of countdown object and its properties, and translation into text content of span elements responsible for timer display
//   days.textContent = padStart(object.days);
//   hours.textContent = padStart(object.hours);
//   minutes.textContent = padStart(object.minutes);
//   seconds.textContent = padStart(object.seconds);

// }

// startBtn.addEventListener('click', startCounter);
//  function startCounter() {
//    clearInterval(timerInterval);
//    timerInterval = setInterval(() => counter(datePickr), 1000);
//    startBtn.setAttribute(`disabled`, true);
//  }
// function counter(chosenDate) {
//   // counter function, nuff said

//   const currentDate = new Date();
//   const countdownTime = convertMs(chosenDate.getTime() - currentDate.getTime());
//   console.log(countdownTime);
//   onScreenLoad(countdownTime);
//   if (
//     countdownTime.days === 0 &&
//     countdownTime.hours === 0 &&
//     countdownTime.minutes === 0 &&
//     countdownTime.seconds === 0
//   ) {
//     clearInterval(timerInterval);
//     days.textContent = padStart(0);
//     hours.textContent = padStart(0);
//     minutes.textContent = padStart(0);
//     seconds.textContent = padStart(0);
//   }
// }
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const currentDate = new Date();
//     const chosenDate = selectedDates[0];
//     if (chosenDate < currentDate) {
//       alert('Please choose a date in the future');
//     } else {
//       startBtn.removeAttribute(`disabled`, true);
//       console.log(chosenDate.getTime());
//       console.log(currentDate.getTime());
    
//     }
//   }
   
// };
 
//  // counter trigger function


//  flatpickr(calendar, options);
  

const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
  const timer = document.querySelector(`.timer`);
const fields = document.querySelectorAll(`.field`);

startBtn.disabled = true;
const TIMER_INTERVAL = 1000;
let intervalId = null;
 
timer.style.display = 'flex';
fields.forEach(field => {
  // adding CSS markup to fields
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.margin = '5px';
  field.style.textAlign = 'center';
})

startBtn.addEventListener('click', onStartBtnBacklash);

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    const nowDate = new Date().getTime();

    if (selectedDate < nowDate) {
      Notiflix.Notify.failure('Please choose a date in the future.');
    startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
});

function onStartBtnBacklash() {
  // stopTimer();
  createTimer();
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

function createTimer() {
  intervalId = setInterval(updateTimer, TIMER_INTERVAL);
}

function updateTimer() {
  const timeLeftValue = calculateDate();
  console.log(timeLeftValue);
  days.textContent = timeLeftValue.days;
  hours.textContent = timeLeftValue.hours;
  minutes.textContent = timeLeftValue.minutes;
  seconds.textContent = timeLeftValue.seconds;
}

function calculateDate() {
  const selectedDate = fp.selectedDates[0].getTime();
  const now = new Date();
  const timeDifference = selectedDate - now;
  const timeLeftObj = convertMsToObj(timeDifference);
  if (timeDifference < TIMER_INTERVAL) {
    stopTimer();
  }
  return timeLeftObj;
}

function convertMsToObj(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}