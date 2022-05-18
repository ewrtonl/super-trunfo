var carta1 = {
  img: "https://i.ibb.co/xHjZtc1/hp6.jpg",
  nome: "Albus Dumbledore",
  atributos: {
  ataque: 100,
  defesa: 100,
  magia: 100
  }
};

var carta2 = {
  img: "https://i.ibb.co/GcR5tPD/hp5.jpg",
  nome: "Lord Voldemort",
  atributos: {
  ataque: 100,
  defesa: 92,
  magia: 95
  }
};

var carta3 = {
  img: "https://i.ibb.co/jZ94CJn/hp12.jpg",
  nome: "Harry Potter",
  atributos: {
  ataque: 80,
  defesa: 85,
  magia: 80
  }
};

var carta4 = {
  img: "https://i.ibb.co/Nsb22TV/hp1.jpg",
  nome: "Bellatrix Lestrange",
  atributos: {
  ataque: 85,
  defesa: 60,
  magia: 85
  }
};

var carta5 = {
  img: "https://i.ibb.co/wKDXzQf/hp4.jpg",
  nome: "Minerva McGonagall",
  atributos: {
  ataque: 85,
  defesa: 95,
  magia: 95
  }
};

var carta6 = {
  img: "https://i.ibb.co/HNwLRtm/hp10.jpg",
  nome: "Dobby",
  atributos: {
  ataque: 50,
  defesa: 83,
  magia: 70
  }
};

var carta7 = {
  img: "https://i.ibb.co/WyWkQhG/hp3.jpg",
  nome: "Hermione Granger",
  atributos: {
  ataque: 80,
  defesa: 85,
  magia: 90
  }
};

var carta8 = {
  img: "https://i.ibb.co/kQC8Fy6/hp2.jpg",
  nome: "Severo Snape",
  atributos: {
  ataque: 90,
  defesa: 98,
  magia: 90
  }
};

var carta9 = {
  img: "https://i.ibb.co/fqTcTZK/hp13.jpg",
  nome: "Ron Weasley",
  atributos: {
  ataque: 70,
  defesa: 75,
  magia: 65
  }
};

var carta10 = {
  img: "https://i.ibb.co/P6WvhjZ/hp11.jpg",
  nome: "Draco Malfoy",
  atributos: {
  ataque: 70,
  defesa: 60,
  magia: 65
  }
};

var carta11 = {
  img: "https://i.ibb.co/pwwCm44/hp14.jpg",
  nome: "Peter Pettigrew",
  atributos: {
  ataque: 30,
  defesa: 60,
  magia: 80
  }
};

var carta12 = {
  img: "https://i.ibb.co/7YStzcB/hp8.jpg",
  nome: "Sirius Black",
  atributos: {
  ataque: 79,
  defesa: 85,
  magia: 90
  }
};

var carta13 = {
  img: "https://i.ibb.co/YZD11sb/ehp1.jpg",
  nome: "Remus Lupin",
  atributos: {
  ataque: 90,
  defesa: 95,
  magia: 88
  }
};

var carta14 = {
  img: "https://i.ibb.co/rtM9QkH/ehp2.jpg",
  nome: "Neville Longbottom",
  atributos: {
  ataque: 75,
  defesa: 70,
  magia: 65
  }
};

var carta15 = {
  img: "https://i.ibb.co/7XNjcJw/ehp4.jpg",
  nome: "Grindelwald",
  atributos: {
  ataque: 97,
  defesa: 88,
  magia: 90
  }
};

var carta16 = {
  img: "https://i.ibb.co/HGYh1Fg/ehp3.png",
  nome: "Nicolas Flamel",
  atributos: {
  ataque: 90,
  defesa: 85,
  magia: 100
  }
};

var carta17 = {
  img: "https://i.ibb.co/r4ZfRjR/ehp5.jpg",
  nome: "Newt Scamander",
  atributos: {
  ataque: 70,
  defesa: 85,
  magia: 90
  }
};

var carta18 = {
  img: "https://i.ibb.co/4FrmFfM/ehp6.jpg",
  nome: "Cedrico Diggory",
  atributos: {
  ataque: 60,
  defesa: 65,
  magia: 73
  }
};

var carta19 = {
  img: "https://i.ibb.co/nDrTSRc/ehp7.jpg",
  nome: "Alastor Moody",
  atributos: {
  ataque: 90,
  defesa: 86,
  magia: 93
  }
};

var carta20 = {
  img: "https://i.ibb.co/GkJ5NMC/ehp9.jpg",
  nome: "Dolores Umbridge",
  atributos: {
  ataque: 66,
  defesa: 60,
  magia: 80
  }
};

var carta21 = {
  img: "https://i.ibb.co/Tv55rfC/ehp8.png",
  nome: "Luna Lovegood",
  atributos: {
  ataque: 40,
  defesa: 60,
  magia: 75
  }
};

var carta22 = {
  img: "https://i.ibb.co/Tv55rfC/ehp8.png",
  nome: "Luna Lovegood",
  atributos: {
  ataque: 40,
  defesa: 60,
  magia: 75
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17, carta18, carta19, carta20, carta21, carta22];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  resetarCartas();
  var numeroCartaMaquina = parseInt(Math.random() * 22);
  cartaMaquina = cartas[numeroCartaMaquina];
  
  var numeroCartaJogador = parseInt(Math.random() * 22);
  while (numeroCartaMaquina == numeroCartaJogador){
    numeroCartaJogador = parseInt(Math.random() * 22);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++){
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class='resultado-final'>VITÓRIA</p>"
  }
  else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class='resultado-final'>DERROTA</p>"
  }
  else if (cartaJogador.atributos[atributoSelecionado] = cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class='resultado-final'>EMPATE</p>"
  } else {
    htmlResultado = "<p class='resultado-final'>Erro ao selecionar atributo</p>"
  }
  
  divResultado.innerHTML = htmlResultado;
  exibirCartaMaquina();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`
  var moldura =  '<img src="https://i.ibb.co/k5C3bhM/Imagem13.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
  
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`
  var moldura =  '<img src="https://i.ibb.co/k5C3bhM/Imagem13.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  
}

function resetarCartas(){
  var divCartaJogador = document.getElementById("carta-jogador");
  
  var divCartaMaquina = document.getElementById("carta-maquina");
  
  document.getElementById("btnSortear").disabled = false;
  
  divCartaMaquina.style.backgroundImage = `url(${"https://i.ibb.co/XxbRDyT/interrog1.png"})`;
  
  divCartaJogador.innerHTML = "";
  
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var moldura =  '<img src="https://i.ibb.co/k5C3bhM/Imagem13.png" style=" width: inherit; height: inherit; position: absolute;">'
  
  var nome = `<p class="carta-subtitle">${"????????"}</p>`
  
  divCartaMaquina.innerHTML =  moldura + nome + tagHTML + "</div>"
  
  var divResultado = document.getElementById("resultado");
  htmlResultado = "<p class='resultado-final'>"+" "+"</p>"
  divResultado.innerHTML = htmlResultado;
}