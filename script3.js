let calculateSalary = function (grossSalary) {

  let taxRate = grossSalary < 100000 ? 0.35 : 0.45;

  let netSalary = grossSalary * (1 - taxRate);

  return Math.round(netSalary);

};

