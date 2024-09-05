const diaSemana = document.getElementById("Dia da semana");
const diaMesAno = document.getElementById("Dia-mes-ano");
const HoraMinSeg = document.getElementById("Hora-minuto-segundo");
const arrayDayWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"]


const dialogPonto = document.getElementById("dialog-ponto");
dialogPonto.showModal();

const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");
btnRegistrarPonto.addEventListener("click", ()=>{
    dialogPonto.showModal();
});

const btnFuncaoFechar = document.getElementById("btn-funcao-fechar");
btnFuncaoFechar.addEventListener("click", ()=>{
    dialogPonto.close();
})

//Todo conjunto numerico (exceto ano) deve ter 2 digitos (adicionar )
// Retornar dia da semana por extenso (em pt-br)

function daySemana() {
    //retornar dia da semana
    const date = new Date();
    return arrayDayWeek [date.getDay()]
}

function dataCompleta(){
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}
function horaCompleta(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes + ":" + date.getSeconds();
}

function atualizaHora(){
    HoraMinSeg.textContent = horaCompleta();
}

setInterval(atualizaHora, 1000)

diaSemana.textContent = daySemana();
diaMesAno.textContent = dataCompleta();