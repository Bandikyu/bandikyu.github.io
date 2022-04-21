//RECIBIR DATOS

const url = "https://script.google.com/macros/s/AKfycbwc3WRPOpt0hPDOMawGrk2GhSf5nohK40w0yT80gyjs-I7UqR_ybkzkZTCilf5J6ksodA/exec";
const recursosPag = fetch(url);
let recursJSON;
let datos = document.getElementById("datos");
let cosa= {};
function probando2(){
    return recursosPag
        .then(resp => resp.json())
        .then(json => structuredClone(json , cosa) );
}
probando2()

let btnLlamada = document.getElementById("llamada");
btnLlamada.addEventListener("click" , ()=>console.log(cosa));

//setInterval(()=>console.log(recursJSON),1000)



function sleep(mili) {
    return new Promise (respuesta => setTimeout(respuesta , mili));
}








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



