window.onload=function () {
    
    var segundos=00;
    var decimos=00;
    var acredecimos=document.getElementById("decimos");
    var acresegundos=document.getElementById('segundos');
    var botaoInicio=document.getElementById('botao-iniciar');
    var botaoParar=document.getElementById('botao-parar');
    var botaoZerar=document.getElementById('botao-zerar');
    var intervalo='';

    botaoInicio.onclick=function () {
        clearInterval(intervalo);//func para parar
        intervalo=setInterval(startTime, 10);//func para iniciar contagem tendo como base 1 milsegundo
    }
    botaoParar.onclick=function () {
        clearInterval(intervalo);
    }

    botaoZerar.onclick=function () {
        clearInterval(intervalo);
        decimos="00";
        segundos="00";
        acredecimos.innerHTML=decimos
        acresegundos.innerHTML=segundos
    }
    //func para correr o tempo basiado nos decmos ndireção aos segundo
    function startTime() {
        decimos++;
        if (decimos<=9) {
            acredecimos.innerHTML="0"+decimos;
        }
        if (decimos >9) {
            acredecimos.innerHTML=decimos;//permite a contagem opos o 9 decimo
        }
        if (decimos>99) {
            console.log(segundos);//faz a contagem apenas do segundos no console
            segundos++;// a cada 99+1 decimos 1 segundo
            acresegundos.innerHTML="0"+segundos;
            decimos=0;//zera o decimos
            acredecimos.innerHTML="0"+0;//adiciona a posição inicial dos decimos
        }
        if (segundos>9) {
            acresegundos.innerHTML=segundos;//permite acontagem apos o 9 segundo
        }
    }
}