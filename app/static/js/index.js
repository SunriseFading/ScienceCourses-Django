function handleQuestionClick(event) {
  const questions = document.querySelectorAll('.question');
  const clickedQuestion = event.target.closest('.question');

  questions.forEach((question) => {
    if (question !== clickedQuestion) {
      question.classList.remove('active');
      question.nextElementSibling.classList.remove('active');
    }
  });

  clickedQuestion.classList.toggle('active');
  clickedQuestion.nextElementSibling.classList.toggle('active');
}

function handleLogLinkClick() {
  const authModal = document.querySelector('.auth-modal');
  authModal.classList.remove('display-none');
}

function handleCloseModalClick() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => modal.classList.add('display-none'));
}

function handleToRegisterClick() {
  const authModal = document.querySelector('.auth-modal');
  const registerModal = document.querySelector('.register-modal');
  authModal.classList.add('display-none');
  registerModal.classList.remove('display-none');
}

function handleToAuthClick() {
  const authModal = document.querySelector('.auth-modal');
  const registerModal = document.querySelector('.register-modal');
  registerModal.classList.add('display-none');
  authModal.classList.remove('display-none');
}

function handleModalClick(event) {
  const target = event.target;
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (target.closest('.modal-close') || target.closest('.timer-close')|| target === modal | target === timerModal ) {
      modal.classList.add('display-none');
    }
  });
}

const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  question.addEventListener('click', handleQuestionClick);
});

const logLink = document.querySelector('.log-link');
logLink.addEventListener('click', handleLogLinkClick);

const modalCloses = document.querySelectorAll('.modal-close');
modalCloses.forEach((mc) =>
  mc.addEventListener('click', handleCloseModalClick)
);

const toRegister = document.querySelector('#to-register');
toRegister.addEventListener('click', handleToRegisterClick);

const toAuth = document.querySelector('#to-auth');
toAuth.addEventListener('click', handleToAuthClick);

const modals = document.querySelectorAll('.modal');
modals.forEach((modal) =>
  modal.addEventListener('click', handleModalClick)
);

const timerModal = document.querySelector('.timer-modal');
const timerCLose = document.querySelector('.timer-close');

const declOfNum = (n, titles) => {
  return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

const timer = () => {
  const timer = document.createElement('div')
  const timerText = document.createElement('p')
  const timerCount = document.createElement('span')
  const timerButton = document.createElement('button')

  timerButton.addEventListener('click', () => {
    timerModal.classList.remove('display-none')
  })

  timerModal.addEventListener('click', handleCloseModalClick)


  timerCLose.addEventListener('click', () => {
      timerModal.classList.add('display-none')
    })

  timer.classList.add('timer')
  timerText.classList.add('timer__text')
  timerCount.classList.add('timer__count')
  timerButton.classList.add('timer__button')

  timerButton.textContent = 'Подробнее'
  timerText.textContent = 'До начала курсов осталось: '

  timerText.append(timerCount)
  timerText.append(timerButton)
  timer.append(timerText)
  document.body.prepend(timer)

  const startTimer = () => {
    //дата, ДО которой будем делать отсчёт. формат (год, месяц(0 - первый месяц, Январь) день, час, минута, секунда)
    const deadline = new Date(2024, 0, 1, 0, 0, 0)
    //текущее время / дата
    const now = new Date()

    const timeRemaining = (deadline - now) / 1000

    //вычисляем количество оcтавшихся дней, часов и тд.
    const seconds = Math.floor(timeRemaining % 60)
    const minutes = Math.floor(timeRemaining / 60 % 60)
    const hours = Math.floor(timeRemaining / 60 / 60 % 24)
    const days = Math.floor(timeRemaining / 60 / 60 / 24)

    const s = declOfNum(seconds, ['секунда', 'секунды', 'секунд'])
    const m = declOfNum(minutes, ['минута', 'минуты', 'минут'])
    const h = declOfNum(hours, ['час', 'часа', 'часов'])
    const d = declOfNum(days, ['день', 'дня', 'дней'])

    timerCount.textContent = `${d} ${h} ${m} ${s}`

    if (timeRemaining > 0) {
      setTimeout(startTimer, 1000)
    } else {
      timer.remove()
    }
  }

  startTimer()
}

timer()

