class Question {
    constructor(question, options, time, answerNumber) {
      this.question = question;
      this.options = options;
      this.time = time;
      this.answer = options[answerNumber]; // The answerNumber is given according to the list index
    }
}

var quizTitle = "The Pro Python Quiz";

var questions = [

    new Question(
        "In python you have to declare the type before making a variable",
        ["true", "false"],
        20,
        1
    ),

    new Question(
        "What is the sign of the walrus operator",
        [":=", "==", "+="],
        20,
        0
    ),

    new Question(
        "What is a decorator in python",
        ["a feature which lets you decorate your python code and make more readable.", "a wrapper for a function which modifies the function's functionality"],
        60,
        1
    ),

    new Question(
        "Who was the creator of python",
        ["James Gosling",  "Larry Page", "Dennis Ritchie", "Guido Van Rossum"],
        30,
        3
    ),

    new Question(
        "When was python created",
        ["1997", "1989", "1991", "2004"],
        20,
        2
    ),

];

var numberOfQuestions = questions.length


function getCurrentQuestionNumber(){
    if(localStorage['currentQuestion'] == undefined) {
        localStorage['currentQuestion'] = 0
        localStorage["questionCompleted"] = "false"
    }
    return getFromStorage('currentQuestion', "int")
}

function getCurrentQuestion(){
    return questions[getCurrentQuestionNumber()]
}

function getQuestionProgress(){
    return `${parseInt(getCurrentQuestionNumber()) + 1}/${numberOfQuestions}`
}

function getCurrentScore(){
    if (!("currentScore" in localStorage)){
        localStorage["currentScore"] = 0
    }

    return getFromStorage('currentScore', "int")
}

function incrementCurrentScore(increment){
    currentScore = getCurrentScore()


    localStorage["currentScore"] = parseInt(increment) + currentScore
}

function moveToNextQuestion(){
    if(getCurrentQuestionNumber() + 1 < numberOfQuestions){
        localStorage["currentQuestion"] = getCurrentQuestionNumber() + 1
        return true;
    }

    localStorage["currentQuestion"] = 0
    localStorage["previousScore"] = localStorage["currentScore"]
    localStorage["questionCompleted"] = "false"
    localStorage["currentScore"] = 0
    return false;
}

function getHighScore(){
    currentScore = getCurrentScore()

    if (!("highScore" in localStorage)){
        localStorage["highScore"] = currentScore
    }

    if(getFromStorage("highScore", "int") < currentScore){
        localStorage["highScore"] = currentScore
    }

    return getFromStorage('highScore', "int")
}

function getFromStorage(variable, type = "str"){

    value = localStorage[variable]

    if (type == "int"){
        return parseInt(value)
    }

    return value
}

valuesToSet = {
    "quizTitle" : quizTitle,
    "highScore" : getHighScore(),
    "numberOfQuestions" : numberOfQuestions,
}

for (const valueToSet in valuesToSet) {
    console.log(valueToSet)
    console.log(valuesToSet[valueToSet])
    try{
        document.getElementById(valueToSet).innerHTML = valuesToSet[valueToSet]
    }
    catch(err) {
        console.log(valueToSet)
        continue;
    }
}

