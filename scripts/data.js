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
        "In what python version was the walrus operator introduced",
        ["3.8", "3.9", "3.10"],
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
