var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criamosquitotempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?' , ' ')

if(nivel === 'facil'){

    criamosquitotempo = 1500

}else if (nivel === 'normal'){

    criamosquitotempo = 1000

}else if(nivel === 'dificil'){

    criamosquitotempo = 100
}

function tamanhojogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}

tamanhojogo()

var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0 ) {
        clearInterval(criamosquito)
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
    }else{

    }
    document.getElementById('cronometro').innerHTML = tempo
}, 1000)
//Inicio do Dom
function posicaoRandomica(){

    if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fimjogo.html'
        }else{
            document.getElementById('v' + vidas).src="img/coracao_vazio.png"

            vidas ++
        }
	}

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoale() + ' ' + ladoale()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
       this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoale() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0 :
            return 'mosquito1'
        case 1 :
            return 'mosquito2'
        case 2 :
            return 'mosquito3'
    }
}

function ladoale() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0 :
            return 'ladoa'
        case 1 :
            return 'ladob'
    }
}