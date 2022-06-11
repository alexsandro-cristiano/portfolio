function changeHeaderWhenScroll(header, navHeight) {
  navHeight -= 52
  if (window.scrollY >= navHeight) {
    header.classList.add('header--active')
  } else {
    header.classList.remove('header--active')
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

export function init() {
  handleMenu()
  handleLinkMenu()
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  window.addEventListener('scroll', function () {
    changeHeaderWhenScroll(header, navHeight)
  })
}
