export function block() {
  let x = 0;
  {
    x = 1;
  }
  return x;
}

export function conditional(x) {
  if (x) {
    return "truthy";
  } else {
    return "falsy";
  }
}

//Switch, case statment and break
export function fruitPrice(fruit) {
  switch (fruit) {
    case "Oranges":
      return "Oranges are $0.59 a pound.";
      break;
    case "Apples":
      return "Apples are $0.32 a pound.";
      break;
    case "Bananas":
      return "Bananas are $0.48 a pound.";
      break;
    default:
      return `Sorry, we are out of ${fruit}.`;
  }
}

export function throwError() {
  throw new Error("This function throws an error.");
}

export function tryCatchAndFinally(myMonth) {
  let monthName;
  let errorMsg;
  try {
    monthName = getMonthName(myMonth);
  } catch (e) {
    errorMsg = e.message;
  } finally {
    return { runsFinally: true, monthName: monthName, errorMsg: errorMsg };
  }
}

function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("Invalid month number.");
  }
}
