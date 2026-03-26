function validarPassword(password){
    if(password.length >= 8 && /[0-9]/.test(password) && /[A-Z]/.test(password)){
        return true
    } else {
        return false
    }
};

//Podría haber sido así, para que sea más profesional:
//function validarPassword(password){
//    return password.length >= 8 &&
//           /[0-9]/.test(password) &&
//           /[A-Z]/.test(password);
//}

module.exports = validarPassword;