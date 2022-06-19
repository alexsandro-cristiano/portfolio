const html = document.querySelector('html')

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)

const dark = {
  primaryColor: getStyle(html, '--primaryColor'),
  bgColorHeaderActive: getStyle(html, '--bgColorHeaderActive')
}

const light = {
  primaryColor: '#e06c00',
  bgColorHeaderActive: '#d8dbe2'
}

const transformKey = key => '--' + key

function changeBody() {
  const body = document.getElementById('body')
  body.classList.toggle('dark')
  body.classList.toggle('light')
}

const changeColors = colors => {
  changeBody()
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

export function init() {
  const checkbox = document.querySelector('input[name=theme]')
  checkbox.addEventListener('change', ({ target }) => {
    target.checked ? changeColors(light) : changeColors(dark)
  })
}
