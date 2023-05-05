const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    // Удаление класса active у всех вопросов
    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove('active')
        q.nextElementSibling.classList.remove('active')
      }
    })

    // Добавление или удаление класса active к текущему вопросу и его ответу
    question.classList.toggle('active')
    question.nextElementSibling.classList.toggle('active')
  })
})

const modalClose = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')
const authModal = document.querySelector('.auth-modal')
const registerModal = document.querySelector('.register-modal')
const logLink = document.querySelector('.log-link')

logLink.addEventListener('click', () => {
  authModal.classList.remove('display-none')
})

modalClose.addEventListener('click', () => {
  modal.classList.add('display-none')
})

const toRegister = document.querySelector('#to-register')
const toAuth = document.querySelector('#to-auth')


toRegister.addEventListener('click', () => {
  authModal.classList.add('display-none')
  registerModal.classList.remove('display-none')

})

toAuth.addEventListener('click', () => {
  registerModal.classList.add('display-none')
  authModal.classList.remove('display-none')

})