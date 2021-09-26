<!-- markdownlint-disable-file -->

<center>

# <font size = "7"> Quiz Game </font>

<font size = "5">A Short Fun Game!</font>

<br>

</center>

* ## Technologies Used
    - HTML
    - CSS
    - JavaScript

<br>

* ## Overall Description

    <ul>

    The game would have a start screen detailing the overall main instructions of the game. A button would be present to go the game page, the game page would have information such as the quiz title, number of questions etc. 
    
    When the user starts the quiz then each question would appear for a limited time which would be unique for each question, the user has to answer the question in that time otherwise the user would get no points. the time would be indicated by a timer which the user would be able to see. When a question is shown to the user to when the user answers the question would be called a session, in each session the question would be displayed along with the options, the amount of options would vary based on each question. 
    
    When the question ends(either by the time being over or the user marking the answer) then if the user has marked the correct answer then the user would get a point otherwise(if the user marked the wrong answer or didn't mark the answer and ran out of time) 0 points would be given, the user would also be able to see the correct answer after each question. 
    
    Once all the sessions are done then the user would be able to see the final score, the high score ever scored by the user.
    
    </ul>

<br>

* ## Software Architecture
    <ul>

    The information would be in a javascript file called "data.js", the game questions(with the options, answers and the time for each question), even the quiz title and number of questions would be in "data.js". The function to get and write the high score from/to the localStorage would also be in this file.
 
    There would be an "index.html" which would be the starting page and then there would be a "gameStart.html", the user would go to the gameStart page through the index page, the gameStart page would redirect "session.html". For the main game that would happen, when each session is completed the score would be shown.

    There would be two files for the game -> "session.html" and "score.html"
    
    The "session.html" would have the layout of a session and would have "session.js" which would fill it up with information regarding the current question which would be saved in localStorage, along with current score and the current question would be increased. "session.js" would get the new information by the data in the "data.js" file, the information would be about the current question. 

    once a session is completed then it would redirect to "score.html" which would show information regarding the score which would then redirect back to "session.html" which would have the new information from the new question.

    once all the sessions are completed then "conclusion.html" would take over, this would conclude the quiz

    </ul>

<br>

<br>

* ## Information Per Page
    * ### Home page(index.html)
        - Title 
        - Description(about)
        - Game Button
    
    * ### Game Start Page(gameStart.html)
        - Number of questions
        - Start button
        - Quiz title
        - High Score
        - Quiz Description

    * ### Session Page(session.html)
        - Question Title
        - Options
        - Question Answer Status
        - Timer
        - Question Number
    
    * ### Score Page(score.html)
        - Current Score
        - Question Number
        - High Score
    
    * ### Ending Page(conclusion.html)
        - Ending Title
        - High Score
        - Score
        - Ending Description
        - Quiz restart button

<br>

> Made by [Ved Rathi](https://ved-programmer.github.io/)
