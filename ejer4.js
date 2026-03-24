function conIVA(precios) {
   return precios.map(a => a + (a * 0.21))
};

module.exports = conIVA;