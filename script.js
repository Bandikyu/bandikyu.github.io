//RECIBIR DATOS
const url = "https://script.google.com/macros/s/AKfycbwc3WRPOpt0hPDOMawGrk2GhSf5nohK40w0yT80gyjs-I7UqR_ybkzkZTCilf5J6ksodA/exec";
const recursosPag = fetch(url);
let recursJSON;
let datos = document.getElementById("datos");
let gasto;

recursosPag
     .then(resp => resp.json())
     .then(json => gasto = json )
     .then(loadDatos)
     .then(usarDatos);


/* let gasto = {
  mensual:{
    total:25757, 
    detalle:[
    [3600 ,	'2022-04-01T03:00:00.000Z'],
    [0 ,	'2022-04-02T03:00:00.000Z'],
    [0 ,	'2022-04-03T03:00:00.000Z'],
    [350 ,	'2022-04-04T03:00:00.000Z'],
    [1000 ,	'2022-04-05T03:00:00.000Z'],
    [1270 ,	'2022-04-06T03:00:00.000Z'],
    [130 ,	'2022-04-07T03:00:00.000Z'],
    [3110 ,	'2022-04-08T03:00:00.000Z'],
    [0 ,	'2022-04-09T03:00:00.000Z'],
    [790 ,	'2022-04-10T03:00:00.000Z'],
    [400 ,	'2022-04-11T03:00:00.000Z'],
    [1300 ,	'2022-04-12T03:00:00.000Z'],
    [2250 ,	'2022-04-13T03:00:00.000Z'],
    [3300 ,	'2022-04-14T03:00:00.000Z'],
    [0 ,	'2022-04-15T03:00:00.000Z'],
    [1200 ,	'2022-04-16T03:00:00.000Z'],
    [0 ,	'2022-04-17T03:00:00.000Z'],
    [980 ,	'2022-04-18T03:00:00.000Z'],
    [0 ,	'2022-04-19T03:00:00.000Z'],
    [0 ,	'2022-04-20T03:00:00.000Z'],
    ['' ,	'2022-04-21T03:00:00.000Z'],
    ['' ,	'2022-04-22T03:00:00.000Z'],
    ['' ,	'2022-04-23T03:00:00.000Z'],
    ['' ,	'2022-04-24T03:00:00.000Z'],
    ['' ,	'2022-04-25T03:00:00.000Z'],
    ['' ,	'2022-04-26T03:00:00.000Z'],
    ['' ,	'2022-04-27T03:00:00.000Z'],
    ['' ,	'2022-04-28T03:00:00.000Z'],
    ['' ,	'2022-04-29T03:00:00.000Z'],
    ['' ,	'2022-04-30T03:00:00.000Z'],
    ['' ,	'2022-05-01T03:00:00.000Z'],
    ]}, 
  diario:{
    total:0.0, 
    detalle:[[0.0]]
  }
} */

//gastos
/* function depurando() {
  gasto.mensual.detalle.forEach(e=>console.log(`${e[0]} ${e[1].slice(0,10)}`));
} */
function filtando() {
  gasto.mensual.detalle.filter(e=>e)
}

let cl = console.log;
const dialogGastos = document.getElementById("dialogGastos");
const btn_viewGastos = document.getElementById("btn_viewGastos");
const btnCloseDialog = document.getElementById("btnCloseDialog");
const mesTotalGasto = document.getElementById("mesTotalGasto");
const dayTotalGasto = document.getElementById("dayTotalGasto");


const detallesGasto = document.getElementById("detallesGasto");
const mesDetallegasto = document.getElementById("mesDetallegasto");
const dayDetalleGasto = document.getElementById("dayDetalleGasto");
const btnDetalleDia = document.getElementById("btnDetalleDia");
const btnDetalleMes = document.getElementById("btnDetalleMes");



//total gastos
btn_viewGastos.addEventListener('click' , ()=> dialogGastos.setAttribute('open',""));
btnCloseDialog.addEventListener('click' , ()=> dialogGastos.removeAttribute('open'));

function loadDatos() {
  dayTotalGasto.textContent = `Gastos en el dia ${gasto.diario.total}`;
  mesTotalGasto.textContent = `Gastos en el mes ${gasto.mensual.total}`;

  //detalles
  gasto.mensual.detalle.forEach(e=>insertNewElement("li",`${e[0]} ${e[1].slice(0,10)}`,mesDetallegasto));
  gasto.diario.detalle.forEach(e=>insertNewElement("li",e,dayDetalleGasto));

  
}



/*RESOLVER #Lista Detalles Gasto: 
tengo que buscar una manera optima de que el efecto de movimiento al usar move() se de
falla porque se ejecutan al "mismo tiempo" entonces no se muestra el efecto de transicion*/
/* btnDetalleDia.addEventListener('click', ()=>{changeDisplay(dayDetalleGasto,"block","none");(move(dayDetalleGasto))});

btnDetalleMes.addEventListener('click', ()=>{changeDisplay(mesDetallegasto  ,"block","none");(move(mesDetallegasto))}); */
btnDetalleDia.addEventListener('click', ()=>{changeDisplay(dayDetalleGasto,"block","none")});

btnDetalleMes.addEventListener('click', ()=>{changeDisplay(mesDetallegasto  ,"block","none")});



//info general


const reservas = document.getElementById("reservas");
const daysFaltan = document.getElementById("daysFaltan");
const recomend = document.getElementById("recomend");
const dispoDay = document.getElementById("dispoDay");
const dispoMes = document.getElementById("dispoMes");


function usarDatos() {
  const saldoDiario = 1000;
  const diasDelMes = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
  .getDate(); 
  const saldoMensual = saldoDiario*diasDelMes;
  const reser = (saldoDiario*new Date().getDate())-gasto.mensual.total;
  const diasFaltantes = diasDelMes - new Date().getDate();


  reservas.textContent = `Reservas ${reser}`;
  daysFaltan.textContent = `Faltan ${diasFaltantes} dias`;
  recomend.textContent = `Gasto recomendado por dia: $${(saldoMensual-gasto.mensual.total)/diasFaltantes}`;
  dispoDay.textContent = `Disponible total para el dia: $${saldoDiario}`;
  dispoMes.textContent = `Disponible total para el mes: $${saldoMensual-gasto.mensual.total}`;
}







//SUBIR DATOS
const newCorreo = document.getElementById("new_correo");
const newGasto = document.getElementById("new_gasto");
const btnName = document.getElementById("btn_introGastos");
let fecha = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()+1}:${new Date().getMinutes()}`

btnName.addEventListener("click" , ()=> addGS(`${fecha},${newGasto.value},${newCorreo.value}`));



function addGS(x) {
    const Url = "https://script.google.com/macros/s/AKfycbyQvHTKS6LfBzJQMnrnHJLOjXRj2XNNyCPpe1qw6zq8aoErSk6iIREypSBcEC40lle9ew/exec";
    fetch(Url , {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(x) // body data type must match "Content-Type" header
      })
}





//UTILIDADES
//crea un elemento HTML y su contenido en un nodo padre segun los argumentos
function insertNewElement(newElement,textContent,parentNode) {

  let nodeElement = document.createElement(newElement);
  let nodeText = document.createTextNode(textContent);
  nodeElement.appendChild(nodeText);
  parentNode.appendChild(nodeElement);

}
//selecciona un elemento al que quieras cambiar entre dos display options
function changeDisplay(element,firstDisplay,secondDisplay) {

  element.style.display == firstDisplay ? element.style.display = secondDisplay : element.style.display = firstDisplay;
  
}
  //la uso para complementar el efecto de 
  function move (element) {
    if (element.style.marginLeft == "0px"){
      element.style.marginLeft = "-50vw";
    } else element.style.marginLeft = "0";
  } 





