var counter = 0;
function ready() {
  console.log("DOMisLOadedConsoleLog");
}

function clickFun() {
  console.log("Click");
}

function createColumn(button) {
  button.addEventListener("click", () => {
    const createDiv = document.createElement("div");
    createDiv.className = "Column";
    createDiv.id = "myColumn" + "_" + counter;
    if (counter == 0) {
      const findcontainerRow = document.getElementById("containerRow");
      findcontainerRow.insertAdjacentElement("afterend", createDiv);
    } else {
      const findMyColumnMinusCounter = document.getElementById(
        "myColumn" + "_" + (counter - 1)
      );
      findMyColumnMinusCounter.insertAdjacentElement("afterend", createDiv);
    }
    counter += 1;
  });
}

function createColumnItem(button) {
  button.addEventListener("click", () => {
    const findMyColumn = document.getElementById(
      "myColumn" + "_" + (counter - 1)
    );
    for (let index = 0; index < 4; index++) {
      if (index === 0) {
        const createCheckboxWrapper = document.createElement("div");
        const createCheckbox = document.createElement("input");
        createCheckboxWrapper.id =
          "createCheckboxWrapper" + "_" + (counter - 1);
        createCheckboxWrapper.style.display = "flex";
        createCheckboxWrapper.border = "1px dashed blue";
        createCheckboxWrapper.style.width = "3vw";
        createCheckbox.type = "checkbox";
        createCheckbox.name = "myCheckbox";
        createCheckbox.style.margin = "0 auto";
        createCheckbox.style.width = "1.5vw";
        findMyColumn.appendChild(createCheckboxWrapper);
        const findCheckboxWrapper = document.getElementById(
          "createCheckboxWrapper" + "_" + (counter - 1)
        );
        findCheckboxWrapper.appendChild(createCheckbox);
      } else {
        const createcolumnItem = document.createElement("textarea");
        createcolumnItem.className = "ColumnItem";
        createcolumnItem.id = "ColumnItemMyId" + "_" + (index + 1);
        createcolumnItem.style.backgroundColor = "red";
        findMyColumn.appendChild(createcolumnItem);
      }
    }
  });
}

function saveData() {
  for (let index = 0; index < counter; index++) {
    if (counter != 0) {
      const getRow = document.getElementById("myColumn" + "_" + (counter - 1));
      getRow.ATTRIBUTE_NODE;
    }
  }
}

window.onload = function () {
  const myButton = document.querySelector(".btn");
  console.log(myButton);

  myButton.addEventListener("click", clickFun);

  // Добавление элемента
  createColumn(myButton);
  createColumnItem(myButton);
};
