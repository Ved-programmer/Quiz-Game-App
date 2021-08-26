var nextPage = "session.html";

if(localStorage["questionCompleted"] == "true"){
    nextPage = "score.html"
}

document.getElementById("nextPage").setAttribute("href", nextPage)
