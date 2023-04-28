li = document.querySelectorAll("li");
arrow = document.querySelectorAll(".arrow")
repense = document.querySelectorAll(".repense");

for (var i=0 ; i < li.length ; i++){
   li[i].addEventListener("click" , (e)=>{
    let clickedli;
    if(e.target.classList.contains("question_icon")){
        clickedli = e.target.parentElement;   
    }else{
        clickedli = e.target.parentElement.parentElement;
    }   
    clickedli.classList.toggle("show_answer");
   
   })
}







