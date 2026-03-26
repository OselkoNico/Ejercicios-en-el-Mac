function contarPalabras(frase){
    if(frase.trim() === ""){
        return {};
    }
    const palabras = frase.trim().split(" ");
    const contador = {};

    for(let palabra of palabras){
        if(palabra === "") continue;
        if(contador[palabra]){
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    }
    return contador;
}

module.exports = contarPalabras;