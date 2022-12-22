

let array = 
[
    {
      "title": "Why We Use <br> Element",
      "answer_1": "To Make Text Bold",
      "answer_2": "To Make Text Italic",
      "answer_3": "To Add Breakline",
      "answer_4": "To Create Horizontal Line",
      "right_answer": "To Add Breakline"
    },
    {
      "title": "Is <img> Element Has Attribute href",
      "answer_1": "Yes",
      "answer_2": "No Its For Anchor Tag <a>",
      "answer_3": "All Elements Has This Attribute",
      "answer_4": "Answer 1 And 3 Is Right",
      "right_answer": "No Its For Anchor Tag <a>"
    },
    {
      "title": "How Can We Make Element Text Bold",
      "answer_1": "Putting It Inside <b> Tag",
      "answer_2": "Putting It Inside <strong> Tag",
      "answer_3": "Customizing It With Font-Weight Property In CSS",
      "answer_4": "All Answers Is Right",
      "right_answer": "All Answers Is Right"
    },
    {
      "title": "What Is The Right Hierarchy For Creating Part Of Page",
      "answer_1": "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
      "answer_2": "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
      "answer_3": "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
      "answer_4": "All Solutions Is Wrong",
      "right_answer": "All Solutions Is Wrong"
    },
    {
      "title": "How Can We Include External Page Inside Our HTML Page",
      "answer_1": "By Using Include in HTML",
      "answer_2": "By Using Load In HTML",
      "answer_3": "By Using iFrame Tag",
      "answer_4": "All Solutions Is Wrong",
      "right_answer": "By Using iFrame Tag"
    },
    {
      "title": "What Is The Tag That Not Exists in HTML",
      "answer_1": "<object>",
      "answer_2": "<basefont>",
      "answer_3": "<abbr>",
      "answer_4": "All Tags Is Exists in HTML",
      "right_answer": "All Tags Is Exists in HTML"
    },
    {
      "title": "How We Specify Document Type Of HTML5 Page",
      "answer_1": "<DOCTYPE html>",
      "answer_2": "<DOCTYPE html5>",
      "answer_3": "<!DOCTYPE html5>",
      "answer_4": "<!DOCTYPE html>",
      "right_answer": "<!DOCTYPE html>"
    },
    {
      "title": "What Is The Element Thats Not Exists in HTML5 Semantics",
      "answer_1": "<article>",
      "answer_2": "<section>",
      "answer_3": "<blockquote>",
      "answer_4": "<aside>",
      "right_answer": "<blockquote>"
    },
    {
      "title": "In HTML Can We Use This Way To Add Attributes",
      "answer_1": "<div class='class-name'>",
      "answer_2": "<div class=class-name>",
      "answer_3": "<div class=\"class-name\">",
      "answer_4": "All Is Right",
      "right_answer": "All Is Right"
    },
    ];


let infoArea = document.querySelector(".quiz-area"),
    answerArea = document.querySelector(".answers-area"),
    submitBtn = document.querySelector(".submit-button") , 
    bullets = document.querySelector(".spans"),
    countdown = document.querySelector(".countdown"),
    result = document.querySelector(".results"),
    resultCounter = 0,
    questionCount = document.querySelector(".count")
    startingBtn = document.querySelector(".btn");

    countdown.innerHTML  = 20

    
    questionCount.innerHTML += "<span></span>"

  let arr = [...array]
  let arr1 = []
  let set = new Set;
  
  while(true){
    let math = Math.floor(Math.random() * arr.length)
    set.add(math)
    if(set.size == 5){
      break;
    }
  }
  for(let rr of set){
    arr1.push(rr)
  }


let count = 0



function counter(){
   counting = setInterval(() => {
   if(countdown.innerHTML > 0){
    countdown.innerHTML--
   }
   
}, 1000);
}



  setInterval(() => {
    if(countdown.innerHTML == 0){
      final()
    }
  }, 250);



  function creater(array){

    submitBtn.style.backgroundColor = "#0075ff"
    submitBtn.style.pointerEvents = "fill"
   let qu = document.createElement("h3")
   qu.textContent = array[arr1[count]].title
   qu.classList.add("quiz-info")
   infoArea.append(qu)


   for(i=1 ; i<=4 ; i++){
     let answer = document.createElement("input")
    let  text = document.createTextNode(array[arr1[count]][`answer_${i}`]) 
     answer.name = "answer"
     answer.type = "radio"
     answer.value = array[arr1[count]][`answer_${i}`]
     answer.classList.add("answer")
     answerArea.append(answer)
     answerArea.append(text)
   }
   answerArea.querySelector("input").checked = true
  }





  function managment(){
    span = questionCount.querySelector("span")
    span.innerHTML = 1
    counter()

   creater(array)
    
 

   startingBtn.style.pointerEvents = "none"
   startingBtn.style.backgroundColor = "#57a4ff"
   
  }


startingBtn.addEventListener("click", function(){managment()})




function final(){
  submitBtn.style.backgroundColor = "#57a4ff"
  submitBtn.style.pointerEvents = "none"
  infoArea.innerHTML = ""
  answerArea.innerHTML = ""
  result.innerHTML = resultCounter + "/" + set.size
}


function checkAnswer(array){
  span.innerHTML++
 

  let rightAnswer = array[arr1[count]]["right_answer"]

  for(let rr of answerArea.querySelectorAll("input")){
    if(rr.checked){
      if(rr.value == rightAnswer){
        resultCounter++
      }
    }
  }

  answerArea.innerHTML = ""
  infoArea.innerHTML = ""


  count++
  creater(array)
  if(count == arr1.length - 1){
    final()
    clearInterval(counting)
   }
}





submitBtn.addEventListener("click" , function(){checkAnswer(array)})



