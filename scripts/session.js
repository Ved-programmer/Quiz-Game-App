function createOption(optionText){
    // console.log("enter")

    var optionsList = document.getElementById("optionsList");
    currentNumberOfOptions = optionsList.childElementCount + 1

    var option = document.createElement("button");
    option.setAttribute("class", `option option-${currentNumberOfOptions}`)
    option.setAttribute("onclick", `provideAnswer("${optionText}")`)
    var node = document.createTextNode(optionText);
    option.appendChild(node);

    optionsList.appendChild(option);
}

function createOptions(question){
    options = question.options
    for(option of options){
        createOption(option)
    }
}

currentQuestion = getCurrentQuestion()

createOptions(currentQuestion)
document.getElementById("questionTitle").innerHTML = currentQuestion.question
document.getElementById("questionNumber").innerHTML = getQuestionProgress()

var timer = document.getElementById("timeKeeper")
var timerOn = true;
timerChange(timer, currentQuestion.time)


function timerChange(someElement, i){
    if(!timerOn){
        return;
    }

    if(i < 0){
        provideAnswer(null);
        return;
    }

    someElement.innerHTML = i

    setTimeout(timerChange, 1000, someElement, i - 1)
}

function storeData(answer, answerStatus, answerCorrect, pointsGiven, timeTaken){
    localStorage["answer"] = answer
    localStorage["answerStatus"] = answerStatus
    localStorage["answerCorrect"] = answerCorrect
    localStorage["pointsGiven"] = pointsGiven
    localStorage["timeTaken"] = timeTaken
    localStorage["time"] = timer.innerHTML
}

function givePoints(){

    timeLeft = parseInt(timer.innerHTML)
    questionTime = parseInt(currentQuestion.time)
    timeTaken = questionTime - timeLeft
    pointsToGive = timeLeft/questionTime * 1000

    incrementCurrentScore(pointsToGive);

    return [pointsToGive, timeTaken]
}

function provideAnswer(answer){
    timerOn = false;
    answerCorrect = false;

    if(answer == null){
        answer = "none chosen"
        answerStatus = "the time was up! you get no points, be quick next time."
    }

    else if(currentQuestion.answer == answer){
        answerStatus = "You chose the correct option!, your speed will determine your points"
        answerCorrect = true;
    }

    else{
        answerStatus = "You chose the wrong option, better luck next time ):"
        timeTaken = currentQuestion.time
    }

    // console.log(answer)

    if (answerCorrect){
        output = givePoints()
        pointsGiven = output[0]
        timeTaken = output[1]
    }

    else {
        pointsGiven = 0
        timeTaken = currentQuestion.time
    }

    storeData(answer, answerStatus, answerCorrect, pointsGiven, timeTaken)

    window.location.replace("score.html");
}
