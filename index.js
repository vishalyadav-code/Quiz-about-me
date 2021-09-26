var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Please give me your name: ")
var upper = userName.toUpperCase()
console.log("Welcome "+ upper + " to \"HOW WE DO YOU KNOW VISHAL?\" quiz: \n")
console.log("You can type option as your answer as well as you can also type the answer, Quiz starts from here: \n");

function play(answer,otherAnswer){
  console.log()
  var userAnswer = readlineSync.question("Answer? : ")
  var lowerAnswer = userAnswer.toLowerCase();

  if ((lowerAnswer === answer) || (lowerAnswer === otherAnswer)){
    console.log('You are right man!!')
    score= score+1;
    console.log("Current score:"+ score)
    console.log(" ")
  } else {
    console.log("You dont Know me enough bruh :( ");
    console.log(" The Right answer is: "+ otherAnswer);
    score= score-1;
    console.log("Current score:"+ score);
    console.log(" ")
  }
}

var array =[
  {
  question:"Where do i live?\na = Delhi\nb = Faridabad\nc = Lucknow\nd = Azamgarh",
  answer:"b",
  answerTwo:"Lucknow"
},
{
  question:"What is my DOB?\na = 23-09-1998\nb = 23-04-1997\nc = 23-09-1999\nd = None of the above",
  answer:"a",
  answerTwo:"23-09-1998"
},
{
  question:"What is my dream company?\na = Amazon\nb =Google\nc = Microsoft\nd = None of the above",
  answer:"d",
  answerTwo:"None of the above"
},
{
  question:"Which is my favorite place?\na = Goa\nb = Jaipur\nc = Shimla\nd = None of the above",
  answer:"d",
  answerTwo:"None of the above"
},
{
  question:"Which is my favorite food?\na = Pizza\nb =Dosa\nc = Pav bhaji\nd = None of the above",
  answer:"b",
  answerTwo:"Dosa"
},
{
  question:"Which is my favorite bike?\na = java\nb = Harley Davidson\nc = Royal Enfield\nd = None of the above",
  answer:"c",
  answerTwo:"Royal Enfield"
},{
  question:"Which is my hometown?\na = Agra\nb = Lucknow\nc = Ahemdabad\nd = Azamgarh",
  answer:"d",
  answerTwo:"Azamgarh"
}]
for(var i=0;i<array.length;i++)
{
  console.log("Ques",(i+1),':',(array[i].question));
  play(array[i].answer, array[i].answerTwo);
} 
console.log("\n\t Your Final score is:" + score);

if(score==7)
{
  console.log("\nWOW BRUHHHH ! You have very high Knowledge About me lol !!!");
}
else {
  if((score==5)||(score==6))
  {
    console.log("\tYou score good!!,Congrats");
  }
  else{
    if((score>=4)&&(score<2))
    {
    console.log("Your score is average, Keep it Up!!");
   }
   else
   {
     console.log("You are below average,Blown up Hard!!");
   }

  }
}