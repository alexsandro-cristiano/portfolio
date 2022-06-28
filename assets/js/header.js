function changeHeaderWhenScroll(header, navHeight) {
  navHeight -= 52
  if (window.scrollY >= navHeight) {
    header.classList.add('activeHeader')
  } else {
    header.classList.remove('activeHeader')
  }
}

function handleMenu() {
  const nav = document.querySelector('#header nav')
  const icons = document.querySelectorAll('nav .icon')
  for (const element of icons) {
    element.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

function handleLinkMenu() {
  const links = document.querySelectorAll('nav .menuList .menuItem a')
  const nav = document.querySelector('#header nav')

  for (const link of links) {
    link.addEventListener('click', function () {
      nav.classList.remove('show')
    })
  }
}

function backToTop() {
  const backToTopButton = document.querySelector('.back-up')
  if (window.scrollY >= 630) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

export function init() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  handleMenu()
  handleLinkMenu()
  window.addEventListener('scroll', function () {
    changeHeaderWhenScroll(header, navHeight)
    backToTop()
    activateMenuAtCurrentSection()
  })
}
