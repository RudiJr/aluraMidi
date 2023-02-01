function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    // não é necessario comparar elemento com null, pois se o mesmo possui algum valor automaticamente não é null.
    if(elemento && elemento.localName === 'audio'){ //and
            elemento.play();
    }else{
        console.warn('Elemento não encontrado ou seletor inválido');
    };
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    tecla.onkeydown = function (evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){//or
            tecla.classList.add('ativa');
        }; 
    };
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    };
};    