const projectsData = [
  {
    name: 'League of Heros',
    tec: 'typscript - scss - html',
    description:
      'Single Page para você adicionar os heróis disponíveis e montar a maior liga de todas. O intuito do projeto é compreender como utilizar a react-router-dom de forma descontraída.',
    linkGithub: 'https://github.com/alexsandro-cristiano/league-of-heros',
    linkWeb: 'https://leagueofheros.vercel.app/'
  },
  {
    name: 'News Worlds',
    tec: 'typscript - styled-component- html',
    description:
      'Single Page para verificar notifica do mundo todo. O objetivo principal é colocar em pratica os conhecimentos sobre consumo de api no react com axios.',
    linkGithub: 'https://github.com/alexsandro-cristiano/newsworlds',
    linkWeb: 'https://newsworlds.vercel.app/'
  },
  {
    name: 'RockSité',
    tec: 'html - css - js',
    description:
      'Single page sobre o estilo musical rock n roll. Inicialmente desenvolvido no 2° periodo da graduação e atualizado conforme o aprendizado de front-end.',
    linkGithub: 'https://github.com/alexsandro-cristiano/rocksite',
    linkWeb: 'https://rocksite.netlify.app/'
  },
  {
    name: 'PitStop',
    tec: 'html - css',
    description:
      'Pagina web para ser o pit stop entre as principais paginas e redes sociais.',
    linkGithub: 'https://github.com/alexsandro-cristiano/pitstop',
    linkWeb: 'https://pitstopdev.netlify.app/'
  },
  {
    name: 'Dev-Magico',
    tec: 'html - css - js',
    description:
      'DM é uma aplicação front-end que consome API pública sobre o universo de Harry Potter. Crédito da API para: fedeperin. Link da API: https://fedeperin-harry-potter-api.herokuapp.com/',
    linkWeb: 'https://devmagico.netlify.app',
    linkGithub: 'https://github.com/alexsandro-cristiano/dev-magico'
  },
  {
    name: 'Cartão de Visita',
    tec: 'html - css - js',
    description:
      'Página desenvolvida com a inspiração do layout da NLW Heart. Objetivo de ser meu cartão de visita',
    linkGithub: 'https://github.com/alexsandro-cristiano/cartao-de-visita',
    linkWeb: ''
  },
  {
    name: 'Jogo da Adivinhação',
    tec: 'C',
    description:
      'Aplicação que simula um jogo de adivinhação numérica com diferentes níveis de dificuldade. Jogo está disponível para ambiente windows',
    linkGithub: 'https://github.com/alexsandro-cristiano/game-unravel-number',
    linkWeb:
      'https://drive.google.com/file/d/1VRWYtbUscLdO8c8eJlO7lj5r93zF08tl/view?usp=sharing'
  },
  {
    name: 'Em Breve',
    tec: '',
    description: 'Em breve novo projeto',
    linkGithub: '',
    linkWeb: ''
  }
]
let renderQuantityCards = 3
const btnShowMore = document.querySelector('.jsCardBtn')

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
function renderCardProject() {
  const divContainerCard = document.querySelector('.js-cardProject')
  if (renderQuantityCards == 3) {
    for (let i = 0; i < renderQuantityCards; i++) {
      divContainerCard.appendChild(createElementCard(i))
    }
    renderQuantityCards += 3
  } else {
    divContainerCard.innerHTML = ''
    for (let i = 0; i < renderQuantityCards; i++) {
      divContainerCard.appendChild(createElementCard(i))
    }
    renderQuantityCards += 3
    removeButton()
  }
}
function removeButton() {
  if (renderQuantityCards > projectsData.length) {
    btnShowMore.style.visibility = 'hidden'
  }
}
export function init() {
  renderCardProject()
  btnShowMore.addEventListener('click', event => {
    event.preventDefault()
    renderCardProject()
  })
}
