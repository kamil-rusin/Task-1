//value of a bill, must be a positive number
const billValue = 60;

//tip percentage, must be a positive number
const tipPercentage = 5;

const calculateTip = (billValue, tipPercentage) => {
  // validate billValue
  const isCorrectBillValue = billValue && typeof billValue === 'number' && billValue >= 0;
  // validate tipPercentage
  const isCorrectTipPercentage = tipPercentage && typeof tipPercentage === 'number' && tipPercentage >= 0;

  if (!isCorrectBillValue || !isCorrectTipPercentage) {
    console.log("incorrect input data");
    return;
  }

  const result = (billValue * (tipPercentage / 100)).toFixed(2);
  console.log(result);
};

//invoke of a function
calculateTip(billValue, tipPercentage);