const processCalculation = (tax, prices) => {
  const checkValidation = {
    checkPrice: (price) => {
      if (typeof price != "number") {
        throw new Error("Price should be number");
      } else {
        return price;
      }
    },
    checkTax: (tax) => {
      if (typeof tax != "number") {
        throw new Error("Tax should be number");
      } else {
        return tax;
      }
    },
  };

  try {
    let total_amount = 0;

    prices.forEach((item) => {
      const validate = checkValidation.checkPrice(item);
      const checkTax = checkValidation.checkTax(tax);

      total_amount = item + item * checkTax;
    });

    console.log(total_amount);

    return total_amount;
  } catch (err) {
    console.log(err);
  }
};

processCalculation(0.4, [12, 24]);
