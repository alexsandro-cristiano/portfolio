function changeHeaderWhenScroll(header, navHeight) {
  navHeight -= 52
  if (window.scrollY >= navHeight) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
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
  /* quando clicar em um item do menu, esconder o menu */
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

export function init() {
  handleMenu()
  handleLinkMenu()
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  window.addEventListener('scroll', function () {
    changeHeaderWhenScroll(header, navHeight)
    backToTop()
  })
}
