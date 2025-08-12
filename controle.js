function acender(){
    var lampada = document.getElementById('lampada')
    lampada.src = "img/acesa.png";
}
function apagar(){
    var lampada = document.getElementById('lampada')
    lampada.src = "img/apagada.png";
}
function piscar(){
    var intervalo = 0;
    var contador = 0;
    while(contador < 10){
        intervalo += 250;
        setTimeout("document.getElementById('lampada') .src='img/acesa.png';",intervalo);
        intervalo += 250;
        setTimeout("document.getElementById('lampada') .src='img/apagada.png';",intervalo);	
        contador++;
        }
}