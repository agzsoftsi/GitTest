// declare variable for options answers
const questionNum=document.getElementById("qNum");
const question=document.querySelector(".question");
const answerTrackerContainer=document.querySelector(".answer-tracker");
const percent=document.querySelector(".percentage");
const options=document.querySelector(".options").children;
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

// questions and options and answers

const questions=[
{
    id:1,
    q: '<strong>WHO IS THE CREATOR OF PYTHON?</strong>',
    options:['Guido Van Rossum','Bill Gates','Yukihiro Matsumoto','Richard Stallman'],
    r:0
}, 
{
    id:2,
    q: '<strong>WHAT DOES THIS COMMAND LINE PRINT?</strong><p>>>>print("Easy Stuff")</p>',
    options:['easy Stuff','Easy Stuff','Easy Stuff"','Easy stuff'],
    r:1
},
{
    id:3,
    q: '<strong>WHAT DOES THIS COMMAND LINE PRINT?</strong><p>>>>print("{:d} karlgarmor".format(32))</p>',
    options:['32 karlgarmor','karlgarmor 32','32Karlgarmor"','32 Karlgarmor'],
    r:0
},
{
    id:4,
    q: '<strong>WHAT DOES THIS COMMAND LINE PRINT?</strong><p>>>>print("{:d} is, {}".format(1, "int"))</p>',
    options:['1 is int','int is 1','1 is, int','1is,int'],
    r:2
}, 
{
    id:5,
    q: '<strong>WHAT DOES THIS COMMAND LINE PRINT?</strong><p>>>>a = "Python is cool"<p>>>>print(a[4])</p>',
    options:['P','n','o','h'],
    r:2
},
{
    id:6,
    q: '<strong>WHAT STAND FOR PIP?</strong>',
    options:['Python In Package','Package Installer for Python','Python Is Push','Package Inside Package'],
    r:1
},
{
    id:7,
    q: '<strong>WHAT IS PYTHON?</strong>',
    options:['A low-level, non-object-oriented compiled programming language','A machine language executed in a java virtual machine','A high-level object-oriented interpreted programming language','A programming language invented by the creator of Linux'],
    r:2
},
{
    id:8,
    q: '<strong>THAT DATA TYPE IS NOT INTEGER</strong>',
    options:['0x18','0b010011','12.','60'],
    r:2
},
{
    id:9,
    q: '<strong>WHAT DO THESE LINES PRINT?</strong><p>if True:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Hello")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("World")',
    options:['Hello World','Hello','World','hello'],
    r:1
},
{
    id:10,
    q: '<strong>WHAT DO THESE LINES PRINT?</strong><p>a = 12<p>if a > 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;if a % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Bye")<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Hello")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("World")',
    options:['Bye','Hello','World','12'],
    r:0
},
{
    id:11,
    q: '<strong>WHAT DO THESE LINES PRINT?</strong><p>for i in range(4):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i, end=" ")',
    options:['1 2 3 4','1 2 3','0 1 2 3','0 1 2 3 4'],
    r:2
},
{
    id:12,
    q: '<strong>TO ADD AN ALTERNATIVE CONDITION TO A CONDITIONAL IF STATEMENT USE</strong>',
    options:['elsif','else if','elif','elseif'],
    r:2
},
{
    id:13,
    q: '<strong>WHAT IS THE CORRECT WAY TO WRITE A WHILE LOOP?</strong>',
    options:['while (a < 5)','while a foreach[0..4]','while a < 5:','while a in range(0..4)'],
    r:2
},
{
    id:14,
    q: '<strong>WHAT IS THE CORRECT WAY TO WRITE A FOR LOOP?</strong>',
    options:['for a in range(0, 3):','for(a in range[0..3])','for a in range(0..3)','for(a=0; a<3; a++)'],
    r:0
},
{
    id:15,
    q: '<strong>WHICH OF THE FOLLOWING IS A DICTIONARY TYPE OBJECT?</strong>',
    options:["dicc = {'Num' -> 1, 'Name' -> 'Carlos'}","dicc = {'Num' => 1, 'Name' => 'Carlos'}","dicc = ('Num': 1, 'Name': 'Carlos')","dicc = {'Num': 1, 'Name': 'Carlos'}"],
    r:3
},
{
    id:16,
    q: '<strong>WHAT IS A LIST IN PYTHON?</strong>',
    options:["is a collection which is ordered and changeable. Allows duplicate members.","is a collection which is ordered and unchangeable. Allows duplicate members.","is a collection which is unordered and unindexed. No duplicate members.","is a collection which is unordered, changeable and indexed. No duplicate members."],
    r:0
},
{
    id:17,
    q: '<strong>WHAT IS A DICTIONARY IN PYTHON?</strong>',
    options:["is a collection which is ordered and changeable. Allows duplicate members.","is a collection which is ordered and unchangeable. Allows duplicate members.","is a collection which is unordered and unindexed. No duplicate members.","is a collection which is unordered, changeable and indexed. No duplicate members."],
    r:3
},
{
    id:18,
    q: '<strong>WHAT IS A SET IN PYTHON?</strong>',
    options:["is a collection which is ordered and changeable. Allows duplicate members.","is a collection which is ordered and unchangeable. Allows duplicate members.","is a collection which is unordered and unindexed. No duplicate members.","is a collection which is unordered, changeable and indexed. No duplicate members."],
    r:2
},
{
    id:19,
    q: '<strong>WHAT IS A TUPLE IN PYTHON?</strong>',
    options:["is a collection which is ordered and changeable. Allows duplicate members.","is a collection which is ordered and unchangeable. Allows duplicate members.","is a collection which is unordered and unindexed. No duplicate members.","is a collection which is unordered, changeable and indexed. No duplicate members."],
    r:1
},
{
    id:20,
    q: '<strong>WHAT DO THESE LINES PRINT?</strong><p>>>>def my_function(counter=89):<br>>>>&nbsp;&nbsp;&nbsp;&nbsp;print("Counter: {}".format(counter))<br>>>><br>>>>my_function()',
    options:["Counter: 12","Counter: 89","Counter: 101","Nothing"],
    r:1
}   



]

//console.log(Object.values(questions));

// Set Question and Options

function load(){
    ///console.log(questions.length);
    //questionIndex=randomNum;
    
    //questionIndex++;
    questionNum.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
    //questionIndex++;
    //console.log(questions.length +""+index);
    

}


function check(element){
 //console.log(element.id);
 if(element.id==questions[questionIndex].r){
     //console.log("correct");
     element.classList.add("correct");
     updateAnswerTracker("correct");
     score++;    
     showScore();
     //console.log("score: "+score);
      }
 else{
     //console.log("wrong");
     element.classList.add("wrong");
     updateAnswerTracker("wrong");  
 }
 //disable all options after select the option
 disabledoption();
}

function disabledoption(){
for(let i=0; i<options.length; i++){
    options[i].classList.add("disabled");
    if(options[i].id==questions[questionIndex].r){
        options[i].classList.add("correct");
    }
}
}

function enabledoption(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled","correct","wrong");
       }

}


function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please Select One Answer");
    }
    else{
        enabledoption();
        randomQuestion();
        }
}


function next(){
validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    
    if(index==questions.length){
         testOver();
         
    }
    else{
        
        if(myArray.length>0){
                for(let i=0; i<myArray.length; i++){
                    if(myArray[i]==randomNumber){
                        hitDuplicate=1;
                        break;
                    }
                }
                if(hitDuplicate==1){
                    randomQuestion();
                }
                else{
                    questionIndex=randomNumber;
                    load();
                    myArr.push(questionIndex);
                }          
            }
        if(myArray.length==0){
            //console.log(myArray.length);
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
            }

            myArray.push(randomNumber);
                }
   
}

function answerTracker(){
        for(let i=0; i<questions.length; i++){
            const div=document.createElement("div");
            answerTrackerContainer.appendChild(div);
            answerTrackerContainer.children[i].innerHTML="Check"+i
        }
}

function updateAnswerTracker(classNam){
    answerTrackerContainer.children[index-1].classList.add(classNam);
   }

function testOver(){
    //console.log(score);
    if(score==20){
        document.querySelector(".testover1").classList.add("show");
        percent.innerHTML=(score/questions.length)*100 + "%";
        //console.log("aqui");
    }
    else{
        document.querySelector(".testover").classList.add("show");
        percent.innerHTML=(score/questions.length)*100 + "%";
        
    }
    //
    
}

function showScore(){
    document.getElementById("userText").innerText=score*5;
    
}

function tryagain(){
window.location="index.html";
}

function twitter(){
    window.location="https://twitter.com/intent/tweet?text=I%20just%20earned%20my%20first%20badge%20in%20Python%20Test,%20I%20already%20have%20RANK%20B%20%20@karlgarmor%20https%3A//witty-crystal-donkey.glitch.me/Media/Images/BadgeRankB.html";
    }



window.onload=function(){
    randomQuestion();
    answerTracker();
   showScore();
    pantalla = document.getElementById("clockText");
    start();

    var carga = document.getElementById('loader-container')
        carga.style.visibility = 'hidden';
        carga.style.opacity = '0';
}