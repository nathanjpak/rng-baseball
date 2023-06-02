interface ICalcWobaArgs {
  PA: number;
  BB: number;
  "1B": number;
  "2B": number;
  "3B": number;
  HR: number;
}

const calcWoba = (args: ICalcWobaArgs) => {
  return (
    (0.689 * args.BB +
      0.884 * args["1B"] +
      1.261 * args["2B"] +
      1.601 * args["3B"] +
      2.072 * args["HR"]) /
    args.PA
  );
};

export default calcWoba;
