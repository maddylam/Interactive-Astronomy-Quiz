//array to hold each question 
let questions = [
{
    q: "Q1: Why do we have seasons? ", 
    answers: {
        a: "a: The Earth is tilted ", 
        b: "b: The Earth's distance to the Sun ", 
        c: "c: The Sun is hotter at different times of the year "
    }, 
    rightAns: "a"
}, 
{
    q: "Q2: What is the ideal environment for star formation? ", 
    answers: {
        a: "A: In a rainbow ", 
        b: "B: In molecular clouds ", 
        c: "C: In HII regions "
    }, 
    rightAns: "b"
}, 
{
    q: "Q3: What fact is false about dark energy? ", 
    answers: {
        a: "A: Dark energy is only found in the Milky Way", 
        b: "B: It pushes things apart ", 
        c: "C: We don't know what supplies this energy "
    }, 
    rightAns: "a"
}, 
{
    q: "Q4: What fact is true about the Big Bang? ", 
    answers: {
        a: "A: It occured around 1000 years ago", 
        b: "B: It scared the aliens away ", 
        c: "C: It occured everywhere "
    }, 
    rightAns: "c"
}, 
{
    q: "Q5 (Last question): What colour is reflection nebula in the optical? ", 
    answers: {
        a: "A: brown ", 
        b: "B: blue ", 
        c: "C: purple and pink "
    }, 
    rightAns: "b"
}
]

//VARIABLES
let i = 0; //the index of the questions array 
userAns = []  //holds the answers the user selects for each question (i.e a,b, or c)

//FUNCTIONS TO DISPLAY QUESTIONS AND BUTTONS

document.getElementById("questionHeader").innerHTML = questions[0].q

//function to show questions on the buttons 
function showButtons(){
    document.getElementById("answer-A").innerHTML = questions[i].answers.a
    document.getElementById("answer-B").innerHTML = questions[i].answers.b
    document.getElementById("answer-C").innerHTML = questions[i].answers.c
}
window.onload = showButtons()

//FUNCTION TO HOLD THE USER'S ANSWERS (CORRECT/WRONG)
//holds the user's answers when clicked 
function adduserAnswers(data){
    //make a case to store each answer 
    if(data === questions[i].rightAns){
        userAns[i] = data    
    } else{
        userAns[i] = data
    }
}

//FUNCTIONS FOR NAVIGATION BUTTONS
function nextQ(){
    //dont let user go to next if answer is not chosen
    //if i === userAns.length(), error message 
    if(i === userAns.length){
        //error message 
        alert("Please choose an option before clicking next! ")
    } else {
        //increment array 
        i++
        //show question
        document.getElementById("questionHeader").innerHTML = questions[i].q
        window.onload = showButtons()
    }
}

function prevQ(){
    //decrement array 
    i--
    //show question 
    document.getElementById("questionHeader").innerHTML = questions[i].q
    window.onload = showButtons()
}

//FUNCTION TO DISPLAY THE RESULTS PAGE
function showResults(){

    //don't let user show submit section until all answers are answered
    if(userAns.length !== questions.length){
        alert("Please finish all questions before submitting")
    } else {

        //find the users score
        var score = 0
        for(var j = 0; j < questions.length; j++){
            if(userAns[j] === questions[j].rightAns){
                score++
            }
        }

        //show the user's score
        document.getElementById("numCorrect").innerHTML = score 
        document.getElementById("results-page").style.display = "block"
        document.getElementById("interactive-quiz").style.display = "none"

        //show user's answers 
        var ans1 = userAns[0]
        var ans2 = userAns[1]
        var ans3 = userAns[2]
        var ans4 = userAns[3]
        var ans5 = userAns[4]

        document.getElementById("ans1").innerHTML = ans1; 
        document.getElementById("ans2").innerHTML = ans2; 
        document.getElementById("ans3").innerHTML = ans3; 
        document.getElementById("ans4").innerHTML = ans4; 
        document.getElementById("ans5").innerHTML = ans5; 

        //show the correct answers 
        document.getElementById("corr1").innerHTML = questions[0].rightAns;
        document.getElementById("corr2").innerHTML = questions[1].rightAns;
        document.getElementById("corr3").innerHTML = questions[2].rightAns;
        document.getElementById("corr4").innerHTML = questions[3].rightAns;
        document.getElementById("corr5").innerHTML = questions[4].rightAns;
    }
}
