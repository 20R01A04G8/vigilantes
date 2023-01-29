const quizDB = [
 {
    question:"Q1:Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times?",
     a:"2times",
     b:"3times",
     c:"4times",
     d:"5times",
     ans:"ans1"
},
{
    question:"Q2:The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
    a:"6years",
    b:"5years",
    c:"4years",
    d:"3years",
    ans:"ans3"
},
{
    question: "Q3:What was the day of the week on 28th May, 2006?",
    a:"Thursday",
    b:"Friday",
    c:"Saturday",
    d:"Sunday",
    ans:"ans4"
},
{
    question: "Q4:A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
    a:"12days",
    b:"13days",
    c:"14days",
    d:"15days",
    ans:"ans4"
},
{
    question:"Q5.A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    a:"120meters",
    b:"180meters",
    c:"324meters",
    d:"150meters",
    ans:"ans4"
}
];
 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore =document.querySelector('#showScore');
let count=0;
let score=0;
const loadquestion=() =>{
        const questionlist = quizDB[count];
        question.innerText = questionlist.question;
         option1.innerText = questionlist.a;
         option2.innerText = questionlist.b;
         option3.innerText = questionlist.c;
         option4.innerText = questionlist.d;
};
loadquestion();
getCheckAnswer = () => {
   let answer;
   answers.forEach((curAnsELem) =>{
      if(curAnsELem.checked)
      {
        answer = curAnsELem.id;
      }
       
   });
   return answer;

};
submit.addEventListener('click',() =>{
   const checkedAnswer = getCheckAnswer();
   console.log(checkedAnswer);
   if(checkedAnswer==quizDB[count].ans){
      score++;
   }
   count++;
   if(count < quizDB.length){
      loadquestion();
   }
   else{
      showScore.innerHTML=`
      <h3> your scored ${score}/${quizDB.length} </h3>
      <button class ="btn" onclick ="location.reload()">play again</button>
       `;
       showScore.classList.remove('scoreArea');
       }

   
});