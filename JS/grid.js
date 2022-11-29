let grid_elements = document.querySelectorAll(".book-element")

for (const elem of grid_elements) {
    elem.addEventListener("click", function() {
        window.location.href = "/book.html?bookName=" + elem.dataset.name + "&pages=" + elem.dataset.pages;
    })
}

function Update() {
    let backgound = document.querySelector("#back-image")
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
    backgound.setAttribute("style","height: " + height + "px; transition: height 0.4s;")
};

setInterval(Update, 100);