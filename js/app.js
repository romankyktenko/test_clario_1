let popUpWrapper = document.querySelector(".pop-up-wrapper");
let popUp = document.querySelector(".pop-up");
let mainButton = document.querySelector(".main-button");
let closePopUp = document.querySelector(".pop-up__close");
let popUpCancel = document.querySelector(".pop-up__button_cancel");
let popUpUninstall = document.querySelector(".pop-up__button_uninstall");


function popUpAddClass() {
  popUpWrapper.classList.add("active");
}
function popUpRemoveClass() {
  popUpWrapper.classList.remove("active");
}


mainButton.addEventListener("click", function() {
  popUpAddClass();
});
closePopUp.addEventListener("click", function() {
  popUpRemoveClass();
});
popUpCancel.addEventListener("click", function() {
  popUpRemoveClass();
});
popUpUninstall.addEventListener("click", function() {
  popUpRemoveClass();
  alert("DONE");
});

window.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest(".pop-up") && !target.closest(".main-button")) {
    popUpRemoveClass();
  }
})
