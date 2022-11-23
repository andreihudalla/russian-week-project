const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bookName = urlParams.get('bookName')
const pagesAmount = urlParams.get('pages')
const title = document.querySelector("title")
const bookNameTitle = document.querySelector("#book-title")
var current_page = 1

let pagesID = document.querySelector("#pages")

const bookNames = {
    ["NikitaAdventure"]: "Приключения Никиты в стране чудес",
    ["Dream"]: "Заветная мечта",
    ["HeroVin"]: "Герой Вин",
    ["MagicBall"]: "Волшебный мяч",
    ["Chort"]: "Чёрт и молодцы",
    ["Ivan"]: "Иван крестьянский сын и Михаил Констанитнович",
    ["Hampter"]: "Иван царевич и хомяк",
}

if (bookNames[bookName]) {
    bookNameTitle.innerHTML = bookNames[bookName]
    title.innerHTML = "Книга '" + bookNames[bookName] + "' | Неделя Русского языка | Школа №550"
    document.addEventListener('DOMContentLoaded', function(){
        for (let x = 1; x <= pagesAmount; x++){
            let NewPage = document.createElement("div")
            NewPage.setAttribute("class","page")
            pagesID.appendChild(NewPage)
            let IMG = document.createElement("img")
            IMG.setAttribute("class","page-value")
            IMG.setAttribute("src","/Books/" + bookName + "/" + x + ".png")
            NewPage.appendChild(IMG)
            if (x === 1) {
                let Frame = document.createElement("img")
                Frame.setAttribute("id","first-page")
                Frame.setAttribute("src","/Media/Frame.png")
                NewPage.appendChild(Frame)
            }
            if (x == pagesAmount && pagesAmount % 2 == 1) {
                let LastPage = document.createElement("div")
                LastPage.setAttribute("class","page")
                pagesID.appendChild(LastPage)
            }
        }
        var pages = document.querySelectorAll('.page');
        for(var i = 0; i < pages.length; i++){
            var page = pages[i];
            if (i % 2 === 0){
                page.style.zIndex = (pages.length - i);
            }
        }
        for(var i = 0; i < pages.length; i++){
            //Or var page = pages[i];
            pages[i].pageNum = i + 1;
            pages[i].addEventListener("click",function(){
                clicked = this.pageNum
                if (clicked == 2) {
                    bookNameTitle.classList.remove('shown');
                }else {
                    bookNameTitle.classList.add('shown');
                }
                if (this.pageNum % 2 === 0){
                    this.classList.remove('flipped');
                    this.previousElementSibling.classList.remove('flipped');
                }
                else{
                    this.classList.add('flipped');
                    this.nextElementSibling.classList.add('flipped');
                }
            })
        }
    })
}