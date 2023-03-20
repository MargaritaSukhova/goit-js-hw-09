import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  if (delayValue < 0 || stepValue < 0 || amountValue <= 0) {
    Notify.warning('Please fill with positive numbers', {
      timeout: 2000,
      clickToClose: true,
    });
    return;
  }
  const promicesArr = createPromises(delayValue, stepValue, amountValue);

  promicesArr.map(promice =>
    promice
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 2000,
          clickToClose: true,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 2000,
          clickToClose: true,
        });
      })
  );
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises(delay, step, amount) {
  const promices = [];
  for (let i = 1; i <= amount; i += 1) {
    const promiceDelay = delay + step * (i - 1);
    const promice = createPromise(i, promiceDelay);
    promices.push(promice);
  }
  return promices;
}
