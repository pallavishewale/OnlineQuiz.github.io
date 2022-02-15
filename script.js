// Questions will be asked
const Questions = [{
        id: 0,
        q: "The first page of the website is called a ____  page.",
        a: [{ text: "Home", isCorrect: true },
            { text: "Node", isCorrect: false },
            { text: "Host", isCorrect: false },
            { text: "Hub", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "Which of the following require large computer memory?",
        a: [{ text: "Graphics", isCorrect: false, isSelected: false },
            { text: "Voice", isCorrect: false },
            { text: "Imaging", isCorrect: false },
            { text: "All of these", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "MS Excel consists of ___",
        a: [{ text: "15000 rows", isCorrect: false },
            { text: "17108 rows", isCorrect: false },
            { text: "19000 rows", isCorrect: false },
            { text: "65536 rows", isCorrect: true }
        ]
  
    },
     {
        id: 3,
        q: "The computer stores its program and data in its?",
        a: [{ text: "ALU", isCorrect: false },
            { text: "Cache memory", isCorrect: false },
            { text: "Control unit", isCorrect: false },
            { text: "Memory", isCorrect: true }
        ]
  
  
    },
    {
        id: 4,
        q: "RAM is used as a short memory because it",
        a: [{ text: "is volatile", isCorrect: true },
            { text: " is very expensive", isCorrect: false },
            { text: " has small capacity", isCorrect: false },
            { text: "is programmable", isCorrect: false }
        ]
  
  
    },
    {
        id: 5,
        q: "The process of loading operating system into memory is known as",
        a: [{ text: "Class loading", isCorrect: false },
            { text: " Memory Partitioning", isCorrect: false },
            { text: " Installing", isCorrect: false },
            { text: "Booting", isCorrect: true }
        ]
  
  
    },
    {
        id: 6,
        q: "The operating system is the most common type of___software.",
        a: [{ text: "Communication", isCorrect: false },
            { text: "Application", isCorrect: false },
            { text: "System", isCorrect: true },
            { text: "Word-processing", isCorrect: false }
        ]
  
  
    },
    {
        id: 7,
        q: " During the boot process, the____looks for the system files.",
        a: [{ text: "CD", isCorrect: false },
            { text: "BIOS", isCorrect: true },
            { text: "CPU", isCorrect: false },
            { text: "DVD", isCorrect: false }
        ]
  
  
    },
    {
        id: 8,
        q: " The memory resident portion of the operating system is called the",
        a: [{ text: "Registry", isCorrect: false },
            { text: "API", isCorrect: false },
            { text: "CMOS", isCorrect: false },
            { text: "Kernel", isCorrect: true }
        ]
  
  
    },
    {
        id: 9,
        q: "A program that is used to view websites is called a",
        a: [{ text: "Browser", isCorrect: true },
            { text: "Web viewer", isCorrect: false },
            { text: "Spreadsheet", isCorrect: false },
            { text: "Word processor", isCorrect: false }
        ]
  
  
    },
                   {
        id: 10,
        q: "India's first super computer is ---",
        a: [{ text: "Param", isCorrect: true },
            { text: "Agni", isCorrect: false },
            { text: "Trisul", isCorrect: false },
            { text: "None of the above", isCorrect: false }
        ]
  
  
    }
  
  
]
  
// Set start
var start = true;

 //  var img1 = document.createElement("img");
   // img1.src = "images/win2.gif";    //win gif
     var img = document.createElement("img");
   img.src = "loss.gif";       //loss Gif
    //geting Gif referance
    var src = document.getElementById("gif-img");
    
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    
    
  
   
    img.src = "blank.png"; 
    src.appendChild(img);
    src.setAttribute("style", "opacity :0");
    
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    
    var choice = "true";
    
  
    // Show selection for op1
    op1.addEventListener("click", () => {
       if( op1.value == "true" ){
           op1.style.backgroundColor = "#17EA48";
           result[0].innerHTML = "True";
           result[0].style.color = "green";
           
            src.removeChild(img);
            img.src = "win2.gif";    
             src.appendChild(img);
            src.setAttribute("style", "opacity :1");
        }
        else{
            
               src.removeChild(img);
             img.src = "loss.gif"; 
               src.appendChild(img);
             src.setAttribute("style", "opacity :1");
            
             result[0].innerHTML = "False";
             result[0].style.color = "red";
             
            
             op1.style.backgroundColor = "#F92F10";
             switch(choice){
                case op2.value:op2.style.backgroundColor = "#17EA48";
                                break;
                case op3.value: op3.style.backgroundColor = "#17EA48";

                                break;
                case op4.value: op4.style.backgroundColor = "#17EA48";
                                break;
             }
            
        }
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
       if( op2.value == "true" ){
           op2.style.backgroundColor = "#17EA48";
           result[0].innerHTML = "True";
           result[0].style.color = "green";
            src.removeChild(img);
            img.src = "win2.gif";    
             src.appendChild(img);
            src.setAttribute("style", "opacity :1");
        }
        else{
             result[0].innerHTML = "False";
             result[0].style.color = "red";
            
            
            src.removeChild(img);
             img.src = "loss.gif"; 
             src.appendChild(img);
             src.setAttribute("style", "opacity :1");
            
             op2.style.backgroundColor = "#F92F10";
             switch(choice){
                case op1.value: op1.style.backgroundColor = "#17EA48";
                                break;
                case op3.value: op3.style.backgroundColor = "#17EA48";
                                break;
                case op4.value: op4.style.backgroundColor = "#17EA48";
                                break;
             }
         }
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        if(op3.value == "true"){
            op3.style.backgroundColor = "#17EA48";
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            
             src.removeChild(img);
             img.src = "win2.gif";    
              src.appendChild(img);
             src.setAttribute("style", "opacity :1");
        }
        else{
             result[0].innerHTML = "False";
             result[0].style.color = "red";
            
             src.removeChild(img);
            img.src = "loss.gif";    
             src.appendChild(img);
             src.setAttribute("style", "opacity :1");
            
             op3.style.backgroundColor = "#F92F10";
             switch(choice){
          
                case op1.value: op1.style.backgroundColor = "#17EA48";
                                break;
                case op2.value:op2.style.backgroundColor = "#17EA48";
                                break;
                case op4.value: op4.style.backgroundColor = "#17EA48";
                                break;
             }
            
        }
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
       if( op4.value == "true" ){
            op4.style.backgroundColor = "#17EA48";
            result[0].innerHTML = "True";
            result[0].style.color = "green";
           
            src.removeChild(img);
           img.src = "win2.gif";    
             src.appendChild(img);
            src.setAttribute("style", "opacity :1");
        }
        else{
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            
             src.removeChild(img);
            img.src = "loss.gif";    
             src.appendChild(img);
             src.setAttribute("style", "opacity :1");
            
            op4.style.backgroundColor = "#F92F10";
            switch(choice){
                case op1.value: op1.style.backgroundColor = "#17EA48";
                                break;
                case op2.value:op2.style.backgroundColor = "#17EA48";
                                break;
                case op3.value: op3.style.backgroundColor = "#17EA48";

                                break;
            }
         }
   })
  
   
}
  
if (start) {
         alert("                         Instructions "+"\n"+
             "         1. Passing score for the test is 50%."+"\n"+
              "        2. The time limit for the test is 10 minuts."+"\n"+
               "       3.Don't refresh the page until you complete the test.");
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
     op1.style.backgroundColor = "white";
     op2.style.backgroundColor = "white";
     op3.style.backgroundColor = "white";
     op4.style.backgroundColor = "white";
    
    start = false;
    if (id < 10) {
         src.removeChild(img);
        id++;
        iterate(id);
        console.log(id);
    }
    else{
        window.location.href = "thankyou.html";
    }
  
})