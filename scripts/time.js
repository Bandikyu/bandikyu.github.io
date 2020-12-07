// para saber a que hora cierra y abre
function Z(n) {
    return (n < 10 ? '0' : '') + n;
    }
var elementTime = document.getElementById("time");

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var cl1 = 13 - hours;
    var secondClose = 20 - hours;
    var op = 8 - hours;
    var op2 = 24 - hours + 8;
    var openInter = 16 - hours;
    var mins = d.getMinutes();
    if (mins === 0) {
        var mc = 0;
    }else {
        var mc = 60 - mins;
    }
    var m = mc;
        //primer turno mañana
    if (hours >= 8 && hours < 13 && mins != 0) {
        elementTime.innerHTML =  "<p>" +"Cerramos en "+ "</p>" + Z(cl1 - 1)+":"+ Z(m) +" hs";
        if (cl1 === 1) {
            elementTime.innerHTML =  "<p>" +"Cerramos en "+ "</p>" + Z(m) +" min";
        }
    }
    else if (hours >= 8 && hours < 13 && mins === 0 ) {
            elementTime.innerHTML =  "<p>" +"Cerramos en "+ "</p>" + Z(cl1) + " hs";
        }
        //hora intermedia entre turnos cerrado
    else if (hours >= 13 && hours < 16 && mins !== 0) {
        elementTime.innerHTML = "<p>" +"Abrimos en "+ "</p>" + Z(openInter - 1)+":"+ Z(m) +" hs";
        if (openInter === 1) {
            elementTime.innerHTML = "<p>" +"Abrimos en "+ "</p>" + Z(m) +" min"
        }
    }
    else if (hours >= 13 && hours < 16 && mins === 0) {
        elementTime.innerHTML =  "<p>" +"Abrimos en "+ "</p>" + Z(openInter) + " hs"
    }
        //hora segundo turno
    else if (hours >= 16 && hours < 20 && mins != 0) {
        elementTime.innerHTML =  "<p>" +"Cerramos en "+ "</p>" + Z(secondClose - 1)+":"+ Z(m) +" hs";
        if (secondClose === 1) {
            elementTime.innerHTML =  "<p>" +"Cerramos en "+ "</p>" + Z(m) +" min";
        }
    }
    else if (hours >= 16 && hours < 20 && mins === 0 ) {
            elementTime.innerHTML =  "<p>" +"Cerramos en "+ "</p>" + Z(secondClose) + " hs";
        }
        //esto seria la noche madrugada despues de las 00 hs
    else if (hours >= 0 && hours < 8 && mins != 0) {
        elementTime.innerHTML =  "<p>" +"Abrimos en "+ "</p>" + Z(op - 1) +":"+ Z(m) +" hs"
        if (op === 1) {
            elementTime.innerHTML =  "<p>" +"Abrimos en "+ "</p>" + Z(m) +" min"
        }
    }
    else if (hours >= 0 && hours < 8 && mins === 0) {
        elementTime.innerHTML =  "<p>" +"Abrimos en "+ "</p>" + Z(op) + " hs"
    }
        //esto seria la noche cuando termina el segundo turno
    else if (hours >= 20 && hours < 24 && mins === 0) {
        elementTime.innerHTML =  "<p>" +"Abrimos en "+ "</p>" + Z(op2) + " hs";
    }
    else if (hours >= 20 && hours < 24 && mins != 0) {
        elementTime.innerHTML = "<p>" + "Abrimos en " + "</p>" + Z(op2 - 1) +":"+ Z(m) +" hs";
    } 
}
printTime()
setInterval(printTime, 30000);

var timeTable = document.getElementById('timetable');

timeTable.innerHTML = '<h4>HORARIOS</h4>'+
                        '<ul>'+
                            '<li>Lunes 08-13hs y 16-20hs</span></li>'+
                            '<li>Martes 08-13hs y 16-20hs</li>'+
                            '<li>Miercoles 08-13hs y 16-20hs</li>'+
                            '<li>Jueves 08-13hs y 16-20hs</li>'+
                            '<li>Viernes 08-13hs y 16-20hs</li>'+
                            '<li>Sabado 08-13hs y 16-20hs</li>'+
                            //'<span>▲</span>'+
                        '</ul>';