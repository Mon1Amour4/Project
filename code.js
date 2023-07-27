function ready() {
  console.log("DOMisLOadedConsoleLog");
}

function clickFun() {
  console.log("Click");
}

function createDiv(button) {
  button.addEventListener("click", () => {
    const createDiv = document.createElement("div");
    createDiv.className = "Column";
    createDiv.id = "myColumn";
    // createDiv.textContent = "Input your text here";
    const findcontainerRow = document.getElementById("containerRow");
    findcontainerRow.insertAdjacentElement("afterend", createDiv);
  });
}

// )

function createColumnItem(button) {
  button.addEventListener("click", () => {
    const findMyColumn = document.getElementById("myColumn");
    for (let index = 0; index < 4; index++) {
      const createcolumnItem = document.createElement("input");
      createcolumnItem.className = "ColumnItem";
      createcolumnItem.id = "ColumnItemMyId" + '_' + (index + 1);
      createcolumnItem.style.width = "25%";
      // createcolumnItem.innerText = "ColumnItem";
      findMyColumn.appendChild(createcolumnItem);
    }
  });
}
function createP(button) {
  button.addEventListener("click", () => {
    for (let index = 0; index < 4; index++) {
      const findMyColumnItem = document.getElementById("ColumnItemMyId" + '_' + (index+1));
      const createP = document.createElement("p");
      findMyColumnItem.appendChild(createP);
      createP.innerText = "TextMyPppppppppppppppppppppppppp";
      const textContent = findMyColumnItem.textContent;
      const textLength = textContent.length;
      const height = textLength*100;
      findMyColumnItem.height = height;
    }

  });
}

window.onload = function () {
  const myButton = document.querySelector(".btn");

  console.log(myButton);

  myButton.addEventListener("click", clickFun);

  // Добавление элемента
  createDiv(myButton);
  createColumnItem(myButton);
  createP(myButton);
};
