let score='';
function winScore() {
  let win1 = document.querySelector('.w1');
  let lose2 = document.querySelector('.l2');
  let w1 = parseInt(win1.textContent);
  let l2 = parseInt(lose2.textContent);
  w1++;
  l2++;
  win1.textContent = w1;
  lose2.textContent = l2;
}

function loseScore() {
  let win2 = document.querySelector('.w2');
  let lose1 = document.querySelector('.l1');
  let w2 = parseInt(win2.textContent);
  let l1 = parseInt(lose1.textContent);
  w2++;
  l1++;
  win2.textContent = w2;
  lose1.textContent = l1;
}

function drawScore() {
  let draw1 = document.querySelector(".d1");
  let draw2 = document.querySelector(".d2");
  let d1 = parseInt(draw1.textContent);
  let d2 = parseInt(draw2.textContent);
  d1++;
  d2++; 
  draw1.textContent = d1;
  draw2.textContent = d2;
}
function winner(){
    document.querySelector('.winner h1').innerHTML='You Win!!!🤩🤩';
}

function loser(){
    document.querySelector('.winner h1').innerHTML='You Lose!!!😥😥Sorry Next Time😊';
}
function statusOfPlayer(status1,status2){
  document.getElementsByClassName('status1')[0].innerHTML=status1;
  document.getElementsByClassName('status2')[0].innerHTML=status2;
};
function draw(){
    document.querySelector('.winner h1').innerHTML='Draw!!!😸😸';
}
function random() {
  let res;
  let num = Math.floor(Math.random() * 3);
  if (num < 1) {
    res = "scissor";
  } else if (num < 2) {
    res = "paper";
  } else {
    res = "rock";
  }
  return res;
}
function scissor() {
  let player2 = random();
  score='scissor';
  if (player2 == "scissor") {
    draw();
    drawScore();
  } else if (player2 == "paper") {
    winner();
    winScore();
  } else {
    loser();
    loseScore();
  }
  statusOfPlayer(score,player2);
}

function rock() {
  let player2 = random();
  score='rock';
  console.log("player2 choose" + player2);
  if (player2 == "rock") {
    draw();
    drawScore();
  } else if (player2 == "paper") {
    loser();
    loseScore();
  } else {
    winner();
    winScore();
  }
  statusOfPlayer(score,player2);
}

function paper() {
  let player2 = random();
  score='paper';
  console.log("player2 choose " + player2);
  if (player2 == "paper") {
    draw();
    drawScore();
  } else if (player2 == "scissor") {
    loser();
    loseScore();
  } else {
    winner();
    winScore();
  }
  statusOfPlayer(score,player2);
}
console.clear;
function name(){
  let n=prompt("Welcome to Game!! Please Enter your name=",'');
  document.querySelector('.player1 .name').innerHTML=n+':';
};
window.onload=function(){
  name();
};