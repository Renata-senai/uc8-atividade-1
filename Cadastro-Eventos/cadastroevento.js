var cadastroEventos = ["data","idade","quantidade"]

let data = 10;
if(data<10){
    console.log("data do evento disponível")
}else {
    console.log("data do evento indisponível")
    //escolher outra data.
}

let idade = 18
if(idade<18){
    console.log("idade não permitida! Apenas maiores de 18 anos")
}else {
    console.log("idade permitida. Continuar cadastro")
}

let quantidadeParticipantes = 100
if(quantidadeParticipantes<100){
    console.log("permitir finalizar cadastro")
}else {
    console.log("Informamos que o número de participantes foi excedido")
}