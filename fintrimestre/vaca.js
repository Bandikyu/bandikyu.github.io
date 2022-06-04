let vaca = document.getElementById('vaca');
let barra = document.getElementById('barra');
let content = document.getElementById('content');
let dia = document.getElementById('dia');


//filtro si hay un Iframe cambia los valores de las variables
//Plantilla de Ejemplo:
/*
    <iframe dinicio="1" minicio="3" dfinal="1" mfinal="8" numtri="2" id="iFrame" 
    src="http://192.168.1.103:5500/fintrimestre/vaca.html" frameborder="0" 
    style="width: 85%; height: 40px; display: block; margin: auto;"></iframe> 
*/

let ifram = window.frameElement;
if(ifram){
    let ifrmIniDia = Number(ifram.attributes.dinicio.value);
    let ifrmIniMes = Number(ifram.attributes.minicio.value);
    let ifrmEndDia = Number(ifram.attributes.dfinal.value);
    let ifrmEndMes = Number(ifram.attributes.mfinal.value);
    let numTri = Number(ifram.attributes.numtri.value);
    vacaciones(ifrmIniDia , ifrmIniMes , ifrmEndDia , ifrmEndMes , numTri)
    //vaca.textContent = ifrmIniDia + " " + ifrmEndDia;
} else vacaciones(23 , 5 , 25 , 8 , 2);


function vacaciones(dIni , mIni , dFin , mFin , tri) {
    let date = new Date();
    let deMiliADia = 1000*60*60*24;

    let diaComienzo = dIni;
    let mesComienzo = mIni;

    let diaFinal = dFin;
    let mesFinal = mFin;

    let numDeTri = tri;
    
    let finalTrimestre = Math.floor((new Date(date.getFullYear(),mesFinal-1,diaFinal+1) - date)/(deMiliADia));
    //cuando llegue a la fecha esto va a retornar un valor negativo, porque date es mayor que la fecha
    let finalTrimestre_100 = finalTrimestre/100;
    
    let diaActualTrimestre = Math.floor((date -  new Date(date.getFullYear(),mesComienzo-1,diaComienzo))/deMiliADia);
    let rangoDiasTrimestre = (((new Date(date.getFullYear(),mesFinal-1,diaFinal))-(new Date(date.getFullYear(),mesComienzo-1,diaComienzo)))/deMiliADia);
    let porcentajeRecorrido = 100/rangoDiasTrimestre*diaActualTrimestre;
    
    
    //esto me genera la barra creciente 
    if(porcentajeRecorrido<=100){
        barra.style.width = `${porcentajeRecorrido}%`;
        content.addEventListener('mouseover', function() {
            barra.style.width = `0%`;
        })
        content.addEventListener('mouseout', function() {
            barra.style.width = `${porcentajeRecorrido}%`;
        })
    }else {barra.style.width = 0;}
    
    barra.innerHTML = `<p>${Math.floor(porcentajeRecorrido)}%</p>`;
    
    content.style.backgroundColor = `hsl(${160+porcentajeRecorrido*2},50%,90%)`;
    content.style.color = `hsl(${160+porcentajeRecorrido*2},20%,30%)`;
    barra.style.backgroundColor = `hsl(${160+porcentajeRecorrido*2},50%,80%)`;
    
    if(finalTrimestre>1) {
        vaca.innerHTML = `RECORDATORIO: faltan <span>${finalTrimestre} dias</span> para que termine el ${numDeTri}º trimestre`;
    }else if(finalTrimestre===1) {
        vaca.innerHTML = `RECORDATORIO: falta <span>${finalTrimestre} dia</span> para que termine el ${numDeTri}º trimestre`;
    }else if (finalTrimestre===0) {vaca.textContent = 'ULTIMO DIA!!!';} else {vaca.textContent = 'Nuevo Trimestre 😎';}
    
    let emoticones = ['😎','😁','😀','😤','😊','😏','😑','😕','😟','😰','😨'];
    let emoDistancia = Math.floor(100/emoticones.length);
    for(i=0; i<emoticones.length; i++) {
        if(([i]*emoDistancia)<=porcentajeRecorrido && finalTrimestre>1) {
            dia.textContent = `${finalTrimestre} dias ${emoticones[i]}`;
        }else if(finalTrimestre<=1) {dia.textContent = `${emoticones[i]}`}
    }

}

//setInterval(vacaciones , 2000);




