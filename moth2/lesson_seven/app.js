let originalArray = [1500, 400, 800, 750, 250, 8000, 150, 640, 100, 370];

function buildArrayItem(value) {
  let div = document.createElement("div");
  div.className = "aray-item";
  div.textContent = value;
  return div;
}

function renderArray(array, container) {
  container.innerHTML = "";
  const $arrayItems = array.map((item) => buildArrayItem(item));
  /* const $arrayItems = array.map(buildArrayItem);
   container.append($arrayItems);  append([1,2,3])
   for (let item of array) {
    let $arrayItem = buildArrayItem(item);
    container.appendChild($arrayItem);
   }
  */
  container.append(...$arrayItems); // append(1,2,3)
}

let $originalArray = document.querySelector("#original .array");
renderArray(originalArray, $originalArray);

let $updatedArray = document.querySelector("#updated .array");
renderArray(["?", "?", "?"], $updatedArray);

document.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;
  let action = event.target.textContent;
  if (action === "map -40%") {
    let updatedArray = originalArray.map((item) => (item / 100) * 40);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "map in KZ") {
    let updatedArray = originalArray.map((x) => x * 5.7 + "KZ");
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter <= 1000") {
    let updatedArray = originalArray.filter((item) => item <= 1000);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter /100") {
    let updatedArray = originalArray.filter((item) => item % 100 === 0);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter expensive") {
    let maxValue = originalArray.reduce(
      (max, item) => (item > max ? item : max),
      0
    );
    let updatedArray = originalArray.filter((item) => item === maxValue);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter low") {
    let minValue = originalArray.reduce(
      (min, item) => (item < min ? item : min),
      originalArray[0]
    );
    let updatedArray = originalArray.filter((item) => item === minValue);
    renderArray(updatedArray, $updatedArray);
  }
  //  else if (action === "filter expensive") {
  //   let updatedArray = originalArray.;
  //   renderArray(updatedArray, $updatedArray);
  // }
  // } else if (action === "slice top 3") {
  //   let updatedArray = originalArray.slice(0, 3);
  //   renderArray(updatedArray, $updatedArray);
  // } else if (action === "slice last 4") {
  //   let updatedArray = originalArray.slice(2);
  //   renderArray(updatedArray, $updatedArray);

  //  else if (action === "reverse") {
  //   let [...originalArrayCopy] = [...originalArray];
  //   let updatedArray = originalArrayCopy.reverse();
  //   renderArray(updatedArray, $updatedArray);
  // }
  //else if (action === "sort ascending") {
  //   let [...originalArrayCopy] = [...originalArray];
  //   let updatedArray = originalArrayCopy.sort((a, b) => a - b);
  //   renderArray(updatedArray, $updatedArray);
  // } else if (action === "sort descending") {
  //   let [...originalArrayCopy] = [...originalArray];
  //   let updatedArray = originalArrayCopy.sort((a, b) => b - a);
  //   renderArray(updatedArray, $updatedArray);
  // }
});
