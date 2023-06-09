const categoriesEl = document.querySelector("#categories");
const categoriesItemsEl = document.querySelectorAll(".item");

function categoriesCounter(rootEl) {
  return console.log(`Number of categories: ${rootEl.children.length}`);
}

function printCategoriesContent(itemEls) {
  itemEls.forEach((element) => {
    console.log("======================");
    console.log(`Category:`, element.firstElementChild.textContent);
    console.log(`Items:`, element.lastElementChild.children.length);
  });
}

categoriesCounter(categoriesEl);
printCategoriesContent(categoriesItemsEl);
