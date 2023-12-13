/** @format */

/*-----altura e largura escopo global-----*/
var width = 0;
var height = 0;
var lifes = 1;
var timed = 15;

var createMosquitoTimed = 1500;

var level = window.location.search;
level = level.replace("?", "");

if (level === "Normal") {
  createMosquitoTimed = 1500;
} else if (level === "Dificil") {
  createMosquitoTimed = 1000;
} else if (level === "Master") {
  createMosquitoTimed = 750;
}

function ResponsiveAdjustStage() {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log("Altura : " + height);
  console.log("Largura : " + width);
}

ResponsiveAdjustStage();

var stopwatch = setInterval(function () {
  timed -= 1;
  if (timed < 0) {
    clearInterval(stopwatch);
    clearInterval(createMosquito);
    window.location.href = "/Winner/winner.html";
  }
  document.getElementById("time").innerHTML = timed; //innerHTML refere-se a colocar um valor dentro da tag HTML
}, 1000);

/*-----Posição Rândomica-----*/

function posRandom() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (lifes > 3) {
      window.location.href = "/GameOver/game_over.html";
    } else {
      document.getElementById("v" + lifes).src = "./imagens/coracao_vazio.png";
      lifes++;
    }
  }

  var posY = Math.floor(Math.random() * height) - 90;
  var posX = Math.floor(Math.random() * width) - 90;

  posX = posX < 0 ? 0 : posX;
  posY = posY < 0 ? 0 : posY;

  console.log(posY, posX);

  /*-----Criando elemento HTML via JS-----*/
  var mosquito = document.createElement("img");
  mosquito.src = "./imagens/mosca.png";
  mosquito.className = sizeRandom() + " " + sideRandom();
  mosquito.style.left = posX + "px";
  mosquito.style.top = posY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };
  document.body.appendChild(mosquito);
}

function sizeRandom() {
  var className = Math.floor(Math.random() * 3);

  switch (className) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function sideRandom() {
  var className = Math.floor(Math.random() * 2);

  switch (className) {
    case 0:
      return "SideA";
    case 1:
      return "SideB";
  }
}
