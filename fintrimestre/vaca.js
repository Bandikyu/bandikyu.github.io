let vaca = document.getElementById('vaca');
let barra = document.getElementById('barra');
let content = document.getElementById('content');
let dia = document.getElementById('dia');

let date = new Date();
let deMiliADia = 1000*60*60*24;

let diaFinal = 28;
let mesFinal = 5;
//esto me genera los dias que faltan hasta que termine el trimestre
let finalTrimestre = Math.floor((new Date(date.getFullYear(),mesFinal-1,diaFinal) - date)/(deMiliADia));
//cuando llegue a la fecha esto va a retornar un valor negativo, porque date es mayor que la fecha
let finalTrimestre_100 = finalTrimestre/100;

let diaComienzo = 20;
let mesComienzo = 2;
//esto me genera la barra creciente
let diaActual = Math.floor((date -  new Date(date.getFullYear(),mesComienzo-1,diaComienzo))/deMiliADia);
let porcentajeFaltante = diaActual/finalTrimestre*100;

barra.style.width = `${porcentajeFaltante}%`;

vaca.innerHTML = `RECORDATORIO: faltan <span>${finalTrimestre} dias</span> para que termine el 1º trimestre`;

let emoticones = ['😎','😁','😀','😤','😊','😏','😑','😕','😟','😰','😨'];
let emoDistancia = Math.floor(100/emoticones.length);
for(i=0; i<emoticones.length; i++) {
    if(([i]*emoDistancia)<=porcentajeFaltante) {
        dia.innerHTML = `${finalTrimestre} dias ${emoticones[i]}`;
    }
}



content.addEventListener('mouseover', function() {
    barra.style.width = `0%`;
})
content.addEventListener('mouseout', function() {
    barra.style.width = `${porcentajeFaltante}%`;
})


