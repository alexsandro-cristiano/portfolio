const skills = ["html", "css", "javascript", "react", "bootstrap", "java", "spring boot", "nodejs", "php","c", "mysql", "postgresql", "git", "github", "uml"]

function createCard(indice) {
  const div = document.createElement("div");
  const icon = document.createElement("i");
  const line = document.createElement("p");

  div.classList.add("skill");
  icon.classList.add("icon-badge");
  icon.classList.add("icon");

  line.innerHTML = `${skills[indice]}`;
  console.log("na funcao create")
  div.appendChild(icon);
  div.appendChild(line);
  
  return div;
}

export function addCard(indice) {
  const cd = document.querySelector("#cardSkill");
  console.log("na funcao addCard")
  const card = createCard(indice);
  cd.appendChild(card);
}

export function init() {
  console.log(skills.length)
  let i
  for (i = 0; i < skills.length; i++) {
    console.log(i)
    addCard(i)
  }
}
