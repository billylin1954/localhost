
var clickcount=0;
if(window.localStorage.getItem(clickcount)>=1){
      clickcount=localStorage.getItem(clickcount)
      document.getElementById("ramen_count").innerHTML=localStorage.getItem(clickcount);
}
console.log(localStorage.getItem(clickcount))
function clicker(){
      clickcount+=1;
    localStorage.setItem(clickcount,JSON.stringify(clickcount))
      console.log(localStorage.getItem(clickcount))
      console.log("working")
      document.getElementById("ramen_count").innerHTML=localStorage.getItem(clickcount);
}
function offclick(){
      getElementById("ramen").style.height="200px";
      getElementById("ramen").style.width="200px";
}