var readlinesync = require("readline-sync")
var chalk= require("chalk")
var score=0;
//LEVEL ONE
//Highscorers List
var highscorers=[{name:"Devang",
                  score:5},
                  {name:"Sarthak",
                  score:4,
                  }
                  ]

//welcome function                  
function welcome(){
  
var username = readlinesync.question(chalk.yellow("What's your name?  "))
console.log("    ")
console.log(chalk.blue("Hello ")+chalk.yellowBright(username)+chalk.blue(" Welcome to the quiz about me,haha !"))
console.log("    ")

console.log(chalk.yellowBright("This is  level one ")+chalk.bgBlueBright("There is also a  Level 2 for you but only if all answers are correct in level one😊 "))
  console.log("  ")}
//play function
function play(question,answer,right){

  var useranswer= readlinesync.keyInSelect(answer)

if((useranswer+1) === right){
  console.log(chalk.green("Hurray! You are right."));
  score++;
}
else{
  console.log(chalk.bgRed("You are wrong."));
  console.log(chalk.yellowBright("The right answer is " )+chalk.cyanBright(answer[right-1]))
}
   console.log(chalk.redBright("Your Current Score is ")+ chalk.bgBlack(score));
   console.log("    ")
}
//play("where do i live","kota")

var questions=[
   {question:"What is my nickname?",
   answer:["inuu","cheenu","chinu","heenu"],
   right:3
   },
   {question:"Which is my Fav. sport?",
   answer:["badminton","cricket","TT","basketball"],
   right:1
   },
   { question:"what do i like th most?",
   answer:["swimming","singing","skating","video game"],
   right:2
   },
   {
question:"what's my birthday date?",
answer:["21","22","23","24"],
right:3
},
{
question:"which brand of alcohol i hate",
answer:["whisky","rum","vodka","wine"],
right:2
}   
]  
function game(){
for(var i=0;i<questions.length;i++){
   var currentquestion=questions[i]
   console.log(chalk.red.bold(currentquestion.question))
   play(currentquestion.question,currentquestion.answer,currentquestion.right);

}
}
function showscore(){
console.log(chalk.bgGreen("Your final score is ")+score)
 console.log(chalk.bgRed("Highscorers are:"))
for(var j=0;j<highscorers.length;j++){
   var currenthighscorer=highscorers[j];
        console.log(chalk.yellowBright(currenthighscorer.name)+":"+chalk.cyan(currenthighscorer.score))
 }
}

function checking(){
console.log(chalk.bgGreen("Your Final Score is: "+score))
if(score>=5){
  console.log(chalk.green.underline("Hurrah! you are highscorer ."))
  console.log(chalk.blackBright("Please send me the screen shot of your score and i will update my highscorer list"))
}
else if(score<=4 && score>=2){
  console.log(chalk.magenta("You are moderate you can retry this quiz once again."))
}
else{
  console.log(chalk.magentaBright.bgBlueBright("You are noob please study about me."))
}
}





welcome()
game()
showscore()
 checking()

//LEVEL 2
var highscorerss=[{name:"Devang",
                  score:10},
                  {name:"Yukta",
                  score:9,
                  }
                  ]

if(score>=4){

console.log(chalk.green(" Hurrray")+chalk.red("!") +chalk.green("You are eligible for level 2 "))



//function playing

function playing(question,answer,right){

  var useranswer= readlinesync.keyInSelect(answer)

if((useranswer+1) === right){
  console.log(chalk.green("Hurray! You are right."));
  score++;
}
else{
  console.log(chalk.bgRed("You are wrong."));
  console.log(chalk.yellowBright("The right answer is " )+chalk.cyanBright(answer[right-1]))
}
   console.log(chalk.redBright("Your Current Score is ")+ chalk.bgBlack(score));
   console.log("    ")
}

   //QUESTIONS


var questions=[
   {question:"how many Girlfriends do i have?",
   answer:["0","1","2","3"],
   right:1
   },
   {question:"how many serious crushes i have?",
   answer:["0","3","4","1"],
   right:4
   },
   { question:"Number of my specs?",
   answer:["1","2","3","4"],
   right:3
   },
   {
    question:"which bike i will buy among the following?",
    answer:["FZ","Gixxer","Bullet","Splendour"],
    right:3
    },
  {
    question:"what's my mobile's lock password",
    answer:["1234","1999","2310","2000"],
    right:2
  }   
  ]

  function gameplay(){
for(var i=0;i<questions.length;i++){
   var currentquestion=questions[i]
   console.log(chalk.red.bold(currentquestion.question))
   playing(currentquestion.question,currentquestion.answer,currentquestion.right);

}
}

function show(){
console.log(chalk.bgGreen("Your final score is ")+score)
 console.log(chalk.bgRed("Highscorers are:"))
for(var j=0;j<highscorerss.length;j++){
   var currenthighscorer=highscorerss[j];
        console.log(chalk.yellowBright(currenthighscorer.name)+":"+chalk.cyan(currenthighscorer.score))
 }
}


function checkers(){
console.log(chalk.bgGreen("Your Final Score is: "+score))
if(score>=9){
  console.log(chalk.green.underline("Hurrah! you are highscorer ."))
  console.log(chalk.blackBright("Please send me the screen shot of your score and i will update my highscorer list"))
}
else if(score<=8 && score>=6){
  console.log(chalk.magenta("You are moderate you can retry this quiz once again."))
}
else{
  console.log(chalk.magentaBright.bgBlueBright("You are noob please study about me."))
}
}


gameplay()
show()
 checkers()
}
else{
  console.log(chalk.red("Sorry you are not eligible for level 2"))
}