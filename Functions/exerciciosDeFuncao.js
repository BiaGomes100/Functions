function inicio() {
    var escolha = parseInt(prompt("Escolha a opção: 1.)Algumas infos do Pet 2.) Quanta fome a gente tem? 3.) Propriedades do Circulo 4.) Ta quente? "))
    switch (escolha) {
        case 1:
            escolher_animais();
            break;

        case 2:
            fome();
            break;

        case 3:
            circulo();
            break;

        case 4:
            temperatura();
            break;

        default:
            erro();
    }
}

function pet(relacao, especie, nome, idade,) {
    idade = parseInt(prompt("Qual a idade do pet?"));
    nome = prompt("qual o nome do pet?");

    let total = idade * relacao;

    alert(`${nome} tem ${total} anos em anos humano! Um(a) ${especie} tem uma relação de ${relacao} anos de ${especie} para cada 1 ano humano.`)
    inicio();
}   

function escolher_animais() {
    let qual_pet = parseInt(prompt("Qual animal quer verificar?  1.) Hamster 2.) Cachorro 3.) Gato"))
    if (qual_pet == 1) {
        pet(30, "Hamster")  
    } else if (qual_pet == 2) {
        pet(7, "Golden")
    } else if (qual_pet == 3) {
        pet(15, "Gato")
    }
    else {
        alert("Oops, Numero invalido. Escolha de 1 a 3")
        inicio();
    }
}

function calcularMeuLanche(idade, lanches) {
    for (var i = 0; i < 3; i++) {
        idade = parseInt(prompt("digite a idade que quer calcular"));
        lanches = prompt("Quantos lanches consome por dia?");
        var total = laches * (idade * 365)
        alert(`Você precisará de ${total} lanches para durar até a idade ${idade} anos.`)
    }
    inicio();
}

function calcularCircunferencia(raio) {
    raio = parseInt(prompt("qual o raio do circulo"))
    alert(`A circunferência é ${2 * 3.14 * raio}`)
}

function calcularArea(raio) {
    raio = parseInt(prompt("qual o raio do circulo"))
    var raio_elevado = raio * raio;
    alert(`A área é ${3.14 * (raio_elevado)}`)
}

function circulo() {
    let escolha = parseInt(prompt("escolha as segintes opções: \n 1.) para circunferência \n ou \n 2.) para área"));
    if (escolha == 1) {
        for (let i = 0; i < 3; i++) {
            calcularCircunferencia();
        }
        inicio();
    } else if (escolha == 2) {
        for (let i = 0; i < 3; i++) {
            calcularArea();
        }
        inicio();
    }
    else {
        alert("Oops, Opçao invalida")
        circulo();
    }
}

function celsius(temperatura) {
    temperatura = parseInt(prompt("digite a temperatura em celcius"))
    var total_fahrenheit = temperatura * 1.8 + 32
    alert(`${temperatura} º em celsius equivalem à ${total_fahrenheit} em Fahrenheit`)
}

function Fahrenheit(temperatura) {
    temperatura = parseInt(prompt("digite a temperatura em Fahrenheit"))
    var total_celsius = (temperatura - 32) * (5/9)
    alert(`${temperatura} º em Fahrenheit equivalem à ${total_celsius} em celsius`)
}

function temperatura() {
    let escolha = parseInt(prompt("escolha as segintes opções: \n\n 1.) c ———> F  ou 2.) f ———> c "));
    if (escolha == 1) {
        celsius();
        inicio();
    } else if (escolha == 2) {
        Fahrenheit();
        inicio();
    }
    else {
        alert("Opção inválida.")
        circulo();
    }
}

function erro() {
    alert("Tente novamente.")
    inicio();
}
