const calculateVAT = function (basePrice, VATPercentage) {
  return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVat = function (basePrice, VATPercentage) {
  const VAT = calculateVAT(basePrice, VATPercentage);
  return basePrice + VAT;
};

console.log(calculatePriceIncludingVat(100, 21));
console.log(calculatePriceIncludingVat(20, 9));