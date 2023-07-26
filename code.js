function ready() {
  console.log("DOMisLOadedConsoleLog");
}

function clickFun() {
  console.log("Click");
}

window.onload = function () {
  const myButton = document.querySelector(".btn");

  console.log(myButton);

  myButton.addEventListener("click", clickFun);

  // Добавление элемента


  myButton.addEventListener("click", () => {
    const createContainer = document.createElement('div');
    createContainer.className = "Column";
    createContainer.innerText = "asdasd";
    console.log(createContainer);
    myButton.insertAdjacentElement("afterend", createContainer);
  });
};
