function initStgSelect() {
  var selectInputs, i, j, selElmnt, selectSelected, optionsList, optionItem;
  
  selectInputs = document.getElementsByClassName("stg-select");

  for (i = 0; i < selectInputs.length; i++) {
    selElmnt = selectInputs[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    selectSelected = document.createElement("DIV");
    selectSelected.setAttribute("class", "select-selected");
    selectSelected.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    selectInputs[i].appendChild(selectSelected);
    /* For each element, create a new DIV that will contain the option list: */
    optionsList = document.createElement("DIV");
    optionsList.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      optionItem = document.createElement("DIV");
      optionItem.innerHTML = selElmnt.options[j].innerHTML;
      optionItem.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, originalSelect, h;
        originalSelect = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < originalSelect.length; i++) {
          if (originalSelect.options[i].innerHTML == this.innerHTML) {
            originalSelect.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      if (optionItem.innerHTML) {
        optionsList.appendChild(optionItem);
      }
    }
    selectInputs[i].appendChild(optionsList);
    selectSelected.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      var clientRect = this.getBoundingClientRect();
      var wHeight = window.innerHeight;
      var bottomOffset = wHeight - clientRect.bottom;
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      var listHeight = this.nextSibling.offsetHeight;

      if (listHeight > bottomOffset) {
        this.nextSibling.classList.add("top");
      } else {
        this.nextSibling.classList.remove("top");
      }
    });
  }
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var selectItems, selected, i, arrNo = [];
  selectItems = document.getElementsByClassName("select-items");
  selected = document.getElementsByClassName("select-selected");
  for (i = 0; i < selected.length; i++) {
    if (elmnt === selected[i]) {
      arrNo.push(i)
    } else {
      selected[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < selectItems.length; i++) {
    if (arrNo.indexOf(i)) {
      selectItems[i].classList.add("select-hide");
    }
  }
}

window.addEventListener('load', initStgSelect)
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
