let count=0 ; 
const countDisplay=document.getElementById("count");
const incrementBtn=document.getElementById("increment");
const decrementBtn=document.getElementById("decrement");
const resetBtn=document.getElementById("reset");


function updatecounter(){
    countDisplay.textContent=count;
    if(count>0){
       countDisplay.style.color="green";
    }else if(count<0){
       countDisplay.style.color="red";
    }else {
        countDisplay.style.color="black";
    }
}
incrementBtn.addEventListener("click",function() {
    count++;
    updatecounter();
});

decrementBtn.addEventListener("click",function() {
    count--;
    updatecounter();
});


resetBtn.addEventListener("click",function() {
    count=0;
    updatecounter();
});