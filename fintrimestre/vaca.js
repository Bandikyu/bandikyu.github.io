let vaca = document.getElementById('vaca');
let barra = document.getElementById('barra');
let content = document.getElementById('content');
let dia = document.getElementById('dia');

let date = new Date();
let deMiliADia = 1000*60*60*24;

let diaFinal = 28;
let mesFinal = 5;

let finalTrimestre = Math.floor((new Date(date.getFullYear(),mesFinal-1,diaFinal+1) - date)/(deMiliADia));
//cuando llegue a la fecha esto va a retornar un valor negativo, porque date es mayor que la fecha
let finalTrimestre_100 = finalTrimestre/100;

let diaComienzo = 9;
let mesComienzo = 3;
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
    vaca.innerHTML = `RECORDATORIO: faltan <span>${finalTrimestre} dias</span> para que termine el 1º trimestre`;
}else if(finalTrimestre===1) {
    vaca.innerHTML = `RECORDATORIO: falta <span>${finalTrimestre} dia</span> para que termine el 1º trimestre`;
}else if (finalTrimestre===0) {vaca.textContent = 'ULTIMO DIA!!!';} else {vaca.textContent = 'Nuevo Trimestre';}

let emoticones = ['😎','😁','😀','😤','😊','😏','😑','😕','😟','😰','😨'];
let emoDistancia = Math.floor(100/emoticones.length);
for(i=0; i<emoticones.length; i++) {
    if(([i]*emoDistancia)<=porcentajeRecorrido && finalTrimestre>1) {
        dia.textContent = `${finalTrimestre} dias ${emoticones[i]}`;
    }else if(finalTrimestre<=1) {dia.textContent = `${emoticones[i]}`}
}





