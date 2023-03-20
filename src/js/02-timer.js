import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedDate = 0;

startBtnEl.setAttribute('disabled', '');

startBtnEl.addEventListener('click', onBtnStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    selectedDate = selectedDates[0].getTime();
    const currentDate = Date.now();
    showNotification(selectedDate, currentDate);
    return selectedDate;
  },
};

flatpickr(inputEl, options);

function showNotification(selectedDate, currentDate) {
  if (selectedDate <= currentDate) {
    Notify.failure('Please choose a date in the future', {
      timeout: 2000,
      clickToClose: true,
      cssAnimationStyle: 'from-right',
    });
  } else {
    startBtnEl.removeAttribute('disabled', '');
  }
}

function onBtnStartClick() {
  timer.start(selectedDate);
  startBtnEl.setAttribute('disabled', '');
}

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.onTick = onTick;
  }

  start(time) {
    this.intervalId = setInterval(() => {
      const startTime = Date.now();
      const selectedTime = time;
      const deltaTime = selectedTime - startTime;
      if (deltaTime < 999) {
        const convertedTime = this.convertMs(0);
        const formatedTime = this.formatData(convertedTime);
        this.onTick(formatedTime);
        clearInterval(this.intervalId);
        return;
      } else {
        const convertedTime = this.convertMs(deltaTime);
        const formatedTime = this.formatData(convertedTime);

        this.onTick(formatedTime);
      }
    }, 1000);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  formatData(dataObj) {
    for (let key in dataObj) {
      dataObj[key] = this.addLeadingZero(dataObj[key]);
    }
    return dataObj;
  }

  addLeadingZero(value) {
    if (value >= 100) {
      return String(value).padStart(3, '0');
    } else {
      return String(value).padStart(2, '0');
    }
  }
}

const timer = new Timer({
  onTick: updateTimerValues,
});

function updateTimerValues({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
