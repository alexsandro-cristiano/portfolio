const projectsData = [
  {
    name: 'RockSité',
    tec: 'html - css - js',
    description:
      'Site desenvolvido no 2° periodo da graduação. Utilizado como tema base estilo musical rock n roll.',
    linkGithub: 'https://github.com/alexsandro-cristiano/rocksite',
    linkWeb: 'https://rocksite.netlify.app/'
  },
  {
    name: 'Dev-Magico',
    tec: 'html - css - js',
    description:
      'Aplicação front-end para consumir uma API sobre o universo do Harry Potter. Credito da API para: fedeperin',
    linkWeb: 'https://dmfront.netlify.app/',
    linkGithub: 'https://github.com/alexsandro-cristiano/dev-magico'
  },
  {
    name: 'Cartão de Visita',
    tec: 'html - css - js',
    description:
      'Página desenvolvida com a inspiração do layout da NLW Heart. Objetivo de ser meu cartão de visita',
    linkGithub: 'https://github.com/alexsandro-cristiano/cartao-de-visita',
    linkWeb: 'https://cartaovisita.netlify.app/'
  },
  {
    name: 'Game Unravel Number',
    tec: 'c',
    description:
      'Jogo da Adivinhação é aplicação utilizando a linguagem C. Este projeto não está disponivel na web, somente no github.',
    linkGithub: 'https://github.com/alexsandro-cristiano/game-unravel-number',
    linkWeb: ''
  },
  {
    name: 'AC Movie',
    tec: 'react - java',
    description:
      'Catálogo de filmes para ser avaliado, a página foi desenvolvida durante a semana Spring React da DevSuperior.',
    linkGithub: 'https://github.com/alexsandro-cristiano/acmovie',
    linkWeb: 'https://acmovie.netlify.app/'
  },
  {
    name: 'Em Construção',
    tec: '',
    description: 'Projeto a ser definido',
    linkGithub: '',
    linkWeb: ''
  }
]

function createElementCard(indice) {
  const currentElement = projectsData[indice]

  const card = document.createElement('div')
  const cardHeader = document.createElement('div')
  const title = document.createElement('h2')
  const wrapperIcons = document.createElement('div')
  const linkGithub = document.createElement('a')
  const linkWebPage = document.createElement('a')
  const cardBody = document.createElement('div')
  const description = document.createElement('p')
  const cardFooter = document.createElement('div')
  const tecStack = document.createElement('p')
  const icon = document.createElement('i')
  const iconWeb = document.createElement('i')

  card.classList.add('bgCard')
  card.classList.add('cardProject')
  card.classList.add('boxShadow')
  cardHeader.classList.add('cardHeader')
  title.classList.add('cardTitle')
  wrapperIcons.classList.add('cardIcon-link')
  linkGithub.classList.add('cardLink')
  linkWebPage.classList.add('cardLink')
  cardBody.classList.add('cardContent')
  description.classList.add('cardContentDescription')
  cardFooter.classList.add('cardFooter')
  tecStack.classList.add('cardContentStack')
  icon.classList.add('icon')
  iconWeb.classList.add('icon')
  icon.classList.add('icon-github')

  title.innerHTML = `${currentElement.name}`
  tecStack.innerHTML = `${currentElement.tec}`
  description.innerHTML = `${currentElement.description}`
  if (currentElement.linkGithub !== '') {
    linkGithub.setAttribute('href', `${currentElement.linkGithub}`)
    linkGithub.setAttribute('target', '__black')
    linkGithub.appendChild(icon)
    wrapperIcons.appendChild(linkGithub)
  }

  if (currentElement.linkWeb !== '') {
    linkWebPage.setAttribute('href', `${currentElement.linkWeb}`)
    linkWebPage.setAttribute('target', '__black')
    iconWeb.classList.add('icon-external-link')
    linkWebPage.appendChild(iconWeb)
    wrapperIcons.appendChild(linkWebPage)
  }

  cardHeader.appendChild(title)
  cardHeader.appendChild(wrapperIcons)
  cardBody.appendChild(description)
  cardFooter.appendChild(tecStack)
  card.appendChild(cardHeader)
  card.appendChild(cardBody)
  card.appendChild(cardFooter)
  return card
}

function renderProjectCard(indice) {
  const divContainerCard = document.querySelector('.js-cardProject')
  divContainerCard.appendChild(createElementCard(indice))
}

export function init() {
  let i
  for (i = 0; i < projectsData.length; i++) {
    renderProjectCard(i)
  }
}
