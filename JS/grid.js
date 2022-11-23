let grid_elements = document.querySelectorAll(".book-element")

for (const elem of grid_elements) {
    elem.addEventListener("click", function() {
        window.location.href = "/book.html?bookName=" + elem.dataset.name + "&pages=" + elem.dataset.pages;
    })
}