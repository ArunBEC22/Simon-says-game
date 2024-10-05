let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let hgsc=document.querySelector("#h2");

//Step 1
document.addEventListener("keypress",function(){
    if(started == false){
        started=true;

        levelup();
    }
});

//step 2


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },350);
 }

 function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
 }
function levelup(){

  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;

  let randidx=Math.floor(Math.random() * 3);
  let randcolor=btns[randidx];
  let randbtn=document.querySelector(`.${randcolor}`);
  gameSeq.push(randcolor);
  console.log(gameSeq);
  gameflash(randbtn);
}


function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
          setTimeout(levelup(),1000);
       }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);

    let userclr=btn.getAttribute("id");
    userSeq.push(userclr);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

