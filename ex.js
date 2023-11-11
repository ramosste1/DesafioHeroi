let heroi = document.querySelector("#heroi");
let xp = document.querySelector("#xp");
let nomeHeroi
let xpHeroi
let level

let btn = document.querySelector("#send")
btn.addEventListener('click', function(e){
    e.preventDefault();
    nomeHeroi = heroi.value;
    xpHeroi = Number(xp.value);
    level = classificacaoHeroi(xpHeroi);
    exibirMensagem(nomeHeroi, level)
});


function classificacaoHeroi(xp) {
    switch (true) {
        case xp <= 1000:
            return "Ferro";
        case xp >= 1001 && xp <= 2000:
            return "Bronze";
        case xp >= 2001 && xp <= 5000:
            return "Prata";
        case xp >= 6001 && xp <= 7000:
            return "Ouro";
        case xp >= 7001 && xp <= 8000:
            return "Platina";  
        case xp >= 8001 && xp <= 9000:
            return "Ascendente";
        case xp >= 9001 && xp <= 10000:
            return "Imortal";
        case xp >= 10001:
            return "Radiante";
        default: 
            return "Classificação Inválida";
    }
};

function exibirMensagem(nomeHeroi, level) {
    var mensagemElement = document.getElementById("mensagem")
    mensagemElement.innerHTML = "O heroi de nome " + nomeHeroi + " esta no nivel " + level
};


