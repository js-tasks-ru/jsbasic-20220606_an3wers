function highlight(table) {
  const trs = table.querySelectorAll("tr");
  for (let tr of trs) {
    if (tr.cells[3].hasAttribute("data-available")) {
      if (tr.cells[3].dataset.available === "true") {
        tr.classList.add("available");
      }

      if (tr.cells[3].dataset.available === "false") {
        tr.classList.add("unavailable");
      }
    } else {
      tr.setAttribute("hidden", true);
    }

    if (tr.cells[2].textContent === "m") {
      tr.classList.add("male");
    }

    if (tr.cells[2].textContent === "f") {
      tr.classList.add("female");
    }

    if (tr.cells[1].textContent < 18) {
      tr.style.textDecoration = "line-through";
    }
  }
}
