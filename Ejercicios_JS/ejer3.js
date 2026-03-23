function sumaSegura(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Deben ser números")
    }
        return a + b
    };

    module.exports = sumaSegura;