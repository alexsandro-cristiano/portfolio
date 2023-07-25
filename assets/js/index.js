
function initModal() {
  const openModal = document.querySelector("#open-modal");
  const closeModal = document.querySelector("#close-modal");
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");
  const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };
  [openModal, closeModal, fade].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
  });
}

function initCopy() {
  let copyText = document.querySelector(".copy-container");
  let btnCopyText = document.querySelector("#copy-button-link");
  let input = document.querySelector(".copy-input-link");
  btnCopyText.addEventListener("click", () => {
    copyText.classList.add("active");
    navigator.clipboard.writeText(input.value).then(() => {
      setTimeout(() => {
        copyText.classList.remove("active");
      }, 2000);
    });
  });
}


  const tabs = document.querySelectorAll(".tab");
  const allContent = document.querySelectorAll(".content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      let line = document.querySelector(".line");
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";
      allContent.forEach((content) => content.classList.remove("active"));
      allContent[index].classList.add("active");
    });
  });
  initModal();
  initCopy();
