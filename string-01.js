const string1 = "Olá, ";
const string2 = "mundo!";

const stringConcatenada = string1 + string2;

console.log(stringConcatenada); 


function comprimentoDaString(texto){
    return texto.length;
}
const String = "Lucas Rangel Costa";
console.log(comprimentoDaString(String));


function transformarEmMaiusculas(texto){
    return texto.toUpperCase();
}
const String1 = "lucas costa"; 
console.log(transformarEmMaiusculas(String1));


function transformarEmMinusculas(texto){
    return texto.toLowerCase();
}
const String2 = "LUCAS COSTA";
console.log(transformarEmMinusculas(String2))


function extrairSubstring(texto, indiceInicio, indiceFim){
    return texto.substring(indiceInicio, indiceFim);
}
const nomeCompleto = "Lucas Rangel Costa"
const indiceInicio = 6;
const indiceFim = 12;
console.log(extrairSubstring(nomeCompleto, indiceInicio, indiceFim));


function buscarCaractere(texto, caractere){
    return texto.indexOf(caractere);
}
const minhaString = "Lucas Rangel Costa";
const caractere = 'o'; 
console.log(buscarCaractere(minhaString, caractere));

const caractereNaoExistente = 'z';
console.log(buscarCaractere(minhaString, caractereNaoExistente));

function repetirString(texto, vezes){
    return texto.repeat(vezes);
}
const minhaString2 = "Olá ";
const numeroDeVezes = 3;
console.log(repetirString(minhaString2, numeroDeVezes));

function removerEspacos(texto){
    return texto.trim()
}

const minhaString3 = "   Olá, mundo!   "
console.log(removerEspacos(minhaString3))


function substituircaractere(texto, caractereAntigo, caractereNovo){
    const regex = new RegExp(caracterAntigo,'g');
    return texto.replace(regex, caractereNovo);
}
const minhaString4 = "banana";
const caracterAntigo = 'a';
const caractereNovo = 'o';
console.log(substituircaractere(minhaString4, caracterAntigo, caractereNovo));

function dividirString(texto, separador){
    return texto.split(separador);
}
const minhaString5 = "Maçã, Banana, Pera, Uva";
const separador = ",";
console.log(dividirString(minhaString5, separador));