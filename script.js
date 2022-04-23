//RECIBIR DATOS
const url = "https://script.google.com/macros/s/AKfycbwc3WRPOpt0hPDOMawGrk2GhSf5nohK40w0yT80gyjs-I7UqR_ybkzkZTCilf5J6ksodA/exec";
const recursosPag = fetch(url);
let recursJSON;
let datos = document.getElementById("datos");
let gasto;

recursosPag
     .then(resp => resp.json())
     .then(json => gasto = json );
     //.then(loadDatos);


let gastoPrueba = {
  mensual:{
    total:19680.0, 
    detalle: [[3600.0], [0.0], [0.0], [350.0], [1000.0], [1270.0], [130.0], [3110.0], [0.0], [790.0], [400.0], [1300.0], [2250.0], [3300.0], [0.0], [1200.0], [0.0], [980.0], [0.0], [0.0]]
  }, 
  diario:{
    total:0.0, 
    detalle:[[0.0]]
  }
}
let cl = console.log;
const dialogGastos = document.getElementById("dialogGastos");
const btn_viewGastos = document.getElementById("btn_viewGastos");
const btnCloseDialog = document.getElementById("btnCloseDialog");
const mesDetallegasto = document.getElementById("mesDetallegasto");
const dayDetalleGasto = document.getElementById("dayDetalleGasto");
const dayTotalGasto = document.getElementById("dayTotalGasto");
const btnDetalleDia = document.getElementById("btnDetalleDia");
const mesTotalGasto = document.getElementById("mesTotalGasto");
const btnDetalleMes = document.getElementById("btnDetalleMes");




btn_viewGastos.addEventListener('click' , ()=> dialogGastos.setAttribute("open",""));
btnCloseDialog.addEventListener("click" , ()=> dialogGastos.removeAttribute("open"));

function loadDatos() {
  dayTotalGasto.textContent = `Gastos en el dia ${gastoPrueba.diario.total}`;
  mesTotalGasto.textContent = `Gastos en el mes ${gastoPrueba.mensual.total}`;

  //dayDetalleGasto.textContent = `Detalles`;
  //mesDetallegasto.textContent = `Detalles`;

  //gastoPrueba.mensual.detalle.forEach(e=> mesDetallegasto.appendChild(elementAndContent('p' , e)))
  
}
//loadDatos();



//utilizar datos
const diasFaltantes = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
.getDate() - new Date().getDate();
const reservas = document.getElementById("reservas");
const daysFaltan = document.getElementById("daysFaltan");
const recomend = document.getElementById("recomend");
const dispoDay = document.getElementById("dispoDay");
const dispoMes = document.getElementById("dispoMes");


function usarDatos() {
  reservas.textContent = `Reservas `
  daysFaltan.textContent = `Faltan ${diasFaltantes} dias`
  recomend.textContent = `Recomendado gastar hasta: `
  dispoDay.textContent = `Disponible total para el dia: `
  dispoMes.textContent = `Disponible total para el mes: `
}
usarDatos();

//let btnLlamada = document.getElementById("llamada");
//btnLlamada.addEventListener("click" , ()=>console.log(gasto));











//CARGAR DATOS
const newCorreo = document.getElementById("new_correo");
const newGasto = document.getElementById("new_gasto");
const btnName = document.getElementById("btn_introGastos");
let fecha = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()+1}:${new Date().getMinutes()}`

// btnName.addEventListener("click" , ()=> arrPersonas.push(new person(newName.value)));
btnName.addEventListener("click" , ()=> addGS(`${fecha},${newGasto.value},${newCorreo.value}`));
//newName.addEventListener('keypress' , (e) => {e.key === 'Enter' ? arrPersonas.push(new person(newName.value)):"mal"});


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
//crea un elemento HTML y su contenido segun los argumentos

  let tag = document.createElement("p");



