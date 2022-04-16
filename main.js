function palabra(letter,hint,definition,word){
    this.letter = letter;
    this.hint = hint;
    this.definition = definition;
    this.word = word;
}

let puntaje = 0;
let divA = document.getElementById("contenedorA");
let entradaA = document.getElementById("rtaA");

let divB = document.getElementById("contenedorB");
let entradaB = document.getElementById("rtaB");

const a = new palabra("A",
 "Comienza con A", 
 "Colección constituida por fragmentos de obras literarias, musicales, científicas, etc., de uno o varios autores, escogidas en función de un criterio.", 
 "antologia" );

 let botonA = document.getElementById("A").addEventListener("click", showA);

 function showA(){
    divA.classList.add("show");
 }

 let valorA = document.getElementById("rtaA");
 localStorage.setItem("respuestaA", valorA);
 valorA.addEventListener("focusout",()=>{
    console.log(valorA.value);
    if (valorA.value == a.word){
       puntaje += 1; 
         alert("epa");
    } else {
         alert("mmmmmm");
    }
 })
 
const b = new palabra("B",
 "Comienza con B",
  "Varita que usa el director de una orquesta o de una banda para marcar el ritmo y la expresión de una obra musical.",
  "batuta");

  let botonB = document.getElementById("B").addEventListener("click", showB);

 function showB(){
    divB.classList.add("show");
 }
  
const c = new palabra("C",
 "Comienza con C", 
 "Ciudad portuaria en la costa caribeña de Colombia",
 "cartagena");

    let botonC = document.getElementById("C").addEventListener("click", salidaC);

  function salidaC(){
     cuadroCentral.innerHTML = "<span>" + c.definition + "<span>";
  }
 
const d = new palabra("D",
 "Contiene D",
 "Cuerpo geométrico formado por una superficie lateral curva y cerrada y dos planos paralelos que forman sus bases.",
 "cilindro");

    let botonD = document.getElementById("D").addEventListener("click", salidaD);

    function salidaD(){
       cuadroCentral.innerHTML = "<span>" + d.definition + "<span>";
    }

const e = new palabra("E",
 "Comienza con E",
 "Que está muy desarrollado o que tiene gran cantidad de alguna cosa." ,
 "exuberante");

 let botonE = document.getElementById("E").addEventListener("click", salidaE);

 function salidaE(){
    cuadroCentral.innerHTML = "<span>" + e.definition + "<span>";
 }
 
const f = new palabra("F",
 "Comienza con F",
  "Que alardea de lo que es y de lo que no es, en especial de valiente.",
  "fanfarron");
  
  let botonF = document.getElementById("F").addEventListener("click", salidaF);

  function salidaF(){
     cuadroCentral.innerHTML = "<span>" + f.definition + "<span>";
  }

const g = new palabra("G",
 "Contiene G",
  "Pena intensa e incontenible que se exterioriza con llanto o quejas.",
  "congoja");

  let botonG = document.getElementById("G").addEventListener("click", salidaG);

  function salidaG(){
     cuadroCentral.innerHTML = "<span>" + g.definition + "<span>";
  }

const h = new palabra("H",
 "Comienza con H",
 "persona que sostenía opiniones o creencias contrarias a la fe de Cristo y de su Iglesia." ,
 "hereje");

 let botonH = document.getElementById("H").addEventListener("click", salidaH);

  function salidaH(){
     cuadroCentral.innerHTML = "<span>" + h.definition + "<span>";
  }

const i = new palabra("I",
 "Contiene I",
  "Que es alegre de modo que resulta festivo, juvenil y apacible.",
  "jovial");

  let botonI = document.getElementById("I").addEventListener("click", salidaI);

  function salidaI(){
     cuadroCentral.innerHTML = "<span>" + i.definition + "<span>";
  }

const j = new palabra("J",
 "Comienza con J",
  "juego de habilidad física y mental en el que los participantes tienen que retirar los bloques de madera de una torre por turnos y colocarlos en la parte superior, hasta que ésta caiga.",
  "jenga");

  let botonJ = document.getElementById("J").addEventListener("click", salidaJ);

  function salidaJ(){
     cuadroCentral.innerHTML = "<span>" + j.definition + "<span>";
  }

const k = new palabra("K",
 "Contiene K",
 "Aspecto exterior, imagen o estilo propio, en especial en el vestir.",
 "look");

 let botonK = document.getElementById("K").addEventListener("click", salidaK);

  function salidaK(){
     cuadroCentral.innerHTML = "<span>" + k.definition + "<span>";
  }

const l = new palabra("L",
 "Comienza con L",
 "Que no tiene asperezas, salientes ni arrugas.",
 "liso");

 let botonL = document.getElementById("L").addEventListener("click", salidaL);

  function salidaL(){
     cuadroCentral.innerHTML = "<span>" + l.definition + "<span>";
  }

const m = new palabra("M",
 "Comienza con M",
 "Que es crítico, tiene ironía aguda y malintencionada.",
 "mordaz");

 let botonM = document.getElementById("M").addEventListener("click", salidaM);

  function salidaM(){
     cuadroCentral.innerHTML = "<span>" + m.definition + "<span>";
  }

const n = new palabra("N",
 "Comienza con N",
 "Alteración leve o grave del funcionamiento normal de un organismo o de alguna de sus partes debida a una causa interna o externa.",
 "enfermedad");

 let botonN = document.getElementById("N").addEventListener("click", salidaN);

  function salidaN(){
     cuadroCentral.innerHTML = "<span>" + n.definition + "<span>";
  }

const o = new palabra("O",
 "Comienza con O",
  "Estofado de carne de vacuno , cortada del jarrete , con el hueso y su caña incluidos.",
  "osobuco");

  let botonO = document.getElementById("O").addEventListener("click", salidaO);

  function salidaO(){
     cuadroCentral.innerHTML = "<span>" + o.definition + "<span>";
  }

const p = new palabra("P",
 "Comienza con P",
 "Pieza metálica cilíndrica, larga y de cabeza redonda que se asegura por el extremo opuesto con una tuerca, una chaveta o un remache, para afirmar piezas de gran volumen." ,
 "perno");

 let botonP = document.getElementById("P").addEventListener("click", salidaP);

  function salidaP(){
     cuadroCentral.innerHTML = "<span>" + p.definition + "<span>";
  }

const q = new palabra("Q",
 "Comienza con Q",
 "Que ocurre, se hace o se repite cada cinco años." ,
 "quinquenal");

 let botonQ = document.getElementById("Q").addEventListener("click", salidaQ);

  function salidaQ(){
     cuadroCentral.innerHTML = "<span>" + q.definition + "<span>";
  }

const r = new palabra("R",
 "Comienza con R",
 "Gema de color rojizo" ,
 "rubi");

 let botonR = document.getElementById("R").addEventListener("click", salidaR);

  function salidaR(){
     cuadroCentral.innerHTML = "<span>" + r.definition + "<span>";
  }

const s = new palabra("S",
 "Comienza con S",
 "evolucion del pokemon Sandshrew",
 "Sandslash");

 let botonS = document.getElementById("S").addEventListener("click", salidaS);

  function salidaS(){
     cuadroCentral.innerHTML = "<span>" + s.definition + "<span>";
  }

const t = new palabra("T",
 "Contiene T" ,
 "trato de favor por el que un funcionario o empleado público otorga un puesto, concesión o concurso público a un amigo o familiar",
 "nepotismo");

 let botonT = document.getElementById("T").addEventListener("click", salidaT);

  function salidaT(){
     cuadroCentral.innerHTML = "<span>" + t.definition + "<span>";
  }

const u = new palabra("U",
 "Comienza con U",
 "Situación o lugar en el que se encuentra una cosa." ,
 "ubicacion");

 let botonU = document.getElementById("U").addEventListener("click", salidaU);

  function salidaU(){
     cuadroCentral.innerHTML = "<span>" + u.definition + "<span>";
  }

const v = new palabra("V",
 "Comienza con V",
 "Que se hace con mucha rapidez o intensidad." ,
 "vertiginoso");

 let botonV = document.getElementById("V").addEventListener("click", salidaV);

  function salidaV(){
     cuadroCentral.innerHTML = "<span>" + v.definition + "<span>";
  }

const w = new palabra("W",
 "Comienza con W",
 "Segunda evolucion del pokemon Squirtle" ,
 "wartortle");

 let botonW = document.getElementById("W").addEventListener("click", salidaW);

  function salidaW(){
     cuadroCentral.innerHTML = "<span>" + w.definition + "<span>";
  }

const x = new palabra("X",
  "Contiene X",
  "Hacer que una persona quede libre de una carga, una culpa, una obligación o un compromiso.",
  "exonerar");

  let botonX = document.getElementById("X").addEventListener("click", salidaX);

  function salidaX(){
     cuadroCentral.innerHTML = "<span>" + x.definition + "<span>";
  }

const y = new palabra("Y",
 "Comienza con Y",
 "Se emplea como material de construcción, en el ambito de la salud, y para obtener moldes de estatuas, monedas, etc." ,
 "yeso");

 let botonY = document.getElementById("Y").addEventListener("click", salidaY);

  function salidaY(){
     cuadroCentral.innerHTML = "<span>" + y.definition + "<span>";
     let rtaY = document.getElementById('rtaY');

     if (rtaY.value == y.word){
         alert("bienbrooo");
        } else {
        alert("ups");
        }
    }

const z = new palabra("Z",
 "Comienza con Z",
  "Mover una cosa de un lado a otro con rapidez y energía.",
  "zarandear");

  let botonZ = document.getElementById("Z").addEventListener("click", salidaZ);

  function salidaZ(){
     cuadroCentral.innerHTML = "<span>" + z.definition + "<span>";
  }



