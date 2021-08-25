function fillDatas(){

    console.log("started")

    fillData("currentScore", getCurrentScore())

    fillData("high-score", getHighScore())

    fillData("questionNumber", getQuestionProgress())

    fillData("answerStatus", localStorage['answerStatus'], false)

    fillData("answer", getCurrentQuestion().answer)

    fillData("timeTaken", getFromStorage('timeTaken'))

    fillData("chosenAnswer", localStorage['answer'])

    fillData("previousPoints", getCurrentScore() - getFromStorage('pointsGiven', "int"))

    fillData("pointsIncrement", getFromStorage('pointsGiven', "int"))

    console.log([getCurrentQuestion().question])

    fillData("question", getCurrentQuestion().question, false)

    fillOptions()


}

function fillOptions(){




    // fillData("options", "<br><br>" + getCurrentQuestion().options.join("<br>")) // temporary code

    let options = getCurrentQuestion().options
  
    let list = document.getElementById("options");
  
    options.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });



}

function fillData(id, data, addNewLine = true){

    contentToAdd = data

    if(addNewLine){
        contentToAdd = "<br>" + data
    }


    document.getElementById(id).innerHTML += contentToAdd
}

fillDatas()

function changeQuestion(){
    console.log("enter")

    nextPage = "session.html"

    if(!moveToNextQuestion()){
        
        nextPage = "conclusion.html"
    }

    window.location.replace(nextPage);
}
