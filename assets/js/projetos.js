const projectsData = [
  {
    id: 0,
    name: 'Game Unravel Number',
    tec: 'c',
    description: 'Jogo utilizando a linguagem C.',
    linkGithub: 'https://github.com/alexsandro-cristiano/game-unravel-number',
    linkWeb: ''
  },
  {
    id: 1,
    name: 'RockSité',
    tec: 'html, css, js',
    description:
      'Site desenvolvido no 2° periodo da graduação.Utilizado como tema base estilo musical rock n roll.',
    linkGithub: 'https://github.com/alexsandro-cristiano/rocksite',
    linkWeb: 'https://rocksite.netlify.app/'
  },
  {
    id: 2,
    name: 'Cartão de Visita',
    tec: 'html, css, js',
    description:
      'Página desenvolvida com a inspiração do layout da NLW Heart. Objetivo de ser meu cartão de visita',
    linkGithub: 'https://github.com/alexsandro-cristiano/cartao-de-visita',
    linkWeb: 'https://cartaovisita.netlify.app/'
  },
  {
    id: 3,
    name: 'AC Movie',
    tec: 'react, java',
    description:
      'Catálogo de filmes para ser avaliado, a página foi desenvolvida durante a semana Spring React da DevSuperior.',
    linkGithub: 'https://github.com/alexsandro-cristiano/acmovie',
    linkWeb: 'https://acmovie.netlify.app/'
  }
]

function createElementCard(indice) {
  const currentElement = projectsData[indice]
  const html = ` <div class="card cardProject">
  <div class="cardHeader">
    <h2 class="cardTitle">${currentElement.name}</h2>
    <div class="cardIcon-link">
      <a  class="cardLink" target='__black' href="${currentElement.linkGithub}"><i class="icon icon-github">
      </i></a>
      
      <a class="cardLink" target='__black' href="${currentElement.linkWeb}"><i class="icon icon-external-link"></i>
      </a>
    </div>
  </div>
  <div class="cardContent">
    <p class="cardContentDescription">
    ${currentElement.description}
    </p>
    <p class="cardContentStack">${currentElement.tec}</p>
  </div>
</div>`
  return html
}

function renderProjectCard(indice) {
  const divContainerCard = document.querySelector('.js-cardProject')
  const cardHtml = createElementCard(indice)
  divContainerCard.insertAdjacentHTML('beforeend', cardHtml)
}

export function init() {
  let i
  for (i = 0; i < projectsData.length; i++) {
    renderProjectCard(i)
  }
}
