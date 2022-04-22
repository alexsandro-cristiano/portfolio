const projectsData = [
  {
    id: 0,
    name: 'RockSité',
    tec: 'html, css, js',
    description:
      'Site desenvolvido no 2° periodo da graduação.Utilizado como tema base estilo musical rock n roll.',
    linkGithub: 'https://github.com/alexsandro-cristiano/rocksite',
    linkWeb: 'https://rocksite.netlify.app/',
  },
  {
    id: 1,
    name: 'Cartão de Visita',
    tec: 'html, css, js',
    description:
      'Página desenvolvida com a inspiração do layout da NLW Heart. Objetivo de ser meu cartão de visita',
    linkGithub: 'https://github.com/alexsandro-cristiano/cartao-de-visita',
    linkWeb: 'https://cartaovisita.netlify.app/',
  },
  {
    id: 2,
    name: 'AC Movie',
    tec: 'react, java',
    description:
      'Catálogo de filmes para ser avaliado, a página foi desenvolvida durante a semana Spring React do professor Nelio Alves.',
    linkGithub: 'https://github.com/alexsandro-cristiano/dsmovie',
    linkWeb: 'https://acmovie.netlify.app/',
  },
  {
    id: 3,
    name: 'Portfolio Alexsandro',
    tec: 'html, css, js',
    description: 'Página para apresentar meus projeto pessoais e academicos.',
    linkGithub: 'https://github.com/alexsandro-cristiano/portfolio',
    linkWeb: 'https://alexsandrodev.netlify.app/',
  },
]

function createElementCard(indice) {
  const currentElement = projectsData[indice]
  const html = `
    <div class="card card-project">
            <div class="card__header">
              <h2 class="card__title">${currentElement.name}</h2>
              <div class="card__icon-link">
                <a  class="card__link" target='__black' href="${currentElement.linkGithub}"><i class="icon icon-github">
                </i></a>
                <a class="card__link" target='__black' href="${currentElement.linkWeb}"><i class="icon icon-globe"></i>
                </a>
                
              </div>
            </div>
            <div class="card__content">
              <p class="card__content--description">
              ${currentElement.description}
              </p>
              <p class="card__content--description card__content--stack">${currentElement.tec}</p>
            </div>
          </div>`
  return html
}

function renderProjectCard(indice) {
  const divContainerCard = document.querySelector('.block-cards')
  const cardHtml = createElementCard(indice)
  divContainerCard.insertAdjacentHTML('beforeend', cardHtml)
}

function populateHTML() {
  let i
  for (i = 0; i < projectsData.length; i++) {
    renderProjectCard(i)
  }
}

function changeHeaderWhenScroll(header, navHeight) {
  if (window.scrollY >= navHeight) {
    header.classList.add('header--show')
  } else {
    header.classList.remove('header--show')
  }
}

function handleMenu() {
  const nav = document.querySelector('#header nav')
  console.log(nav)

  const icons = document.querySelectorAll('nav .icon')
  console.log(icons)

  for (const element of icons) {
    element.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

function handleLinkMenu() {
  /* quando clicar em um item do menu, esconder o menu */
  const links = document.querySelectorAll('nav .menu__list .menu__item a')
  const nav = document.querySelector('#header nav')

  for (const link of links) {
    link.addEventListener('click', function () {
      nav.classList.remove('show')
    })
  }
}

function init() {
  populateHTML()
  handleMenu()
  handleLinkMenu()

  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 700,
    reset: true,
  })

  scrollReveal.reveal(
    `#apresentacao, #apresentacao .title, #apresentacao .subtitle, #apresentacao .description, #apresentacao .midia-social
    `,
    { interval: 100 }
  )

  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  window.addEventListener('scroll', function () {
    changeHeaderWhenScroll(header, navHeight)
  })
}

init()
