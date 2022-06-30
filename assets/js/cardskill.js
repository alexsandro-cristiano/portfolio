const skills = [
  'html',
  'css',
  'javascript',
  'react',
  'sass',
  'java',
  'spring boot',
  'nodejs',
  'php',
  'c',
  'mysql',
  'postgresql',
  'git',
  'github',
  'uml'
]

function createCard(indice) {
  const div = document.createElement('div')
  const icon = document.createElement('i')
  const line = document.createElement('p')

  div.classList.add('skill')
  div.classList.add('bgCard')
  div.classList.add('boxShadow')
  icon.classList.add('icon-badge')
  icon.classList.add('icon')

  line.innerHTML = `${skills[indice]}`
  div.appendChild(icon)
  div.appendChild(line)

  return div
}

export function addCard(indice) {
  const cd = document.querySelector('.js-cardSkill')
  const card = createCard(indice)
  cd.appendChild(card)
}

export function init() {
  let i
  for (i = 0; i < skills.length; i++) {
    addCard(i)
  }
}
