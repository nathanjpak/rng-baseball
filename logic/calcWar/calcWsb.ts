interface ICalcWsbArgs {
  SB: number;
  CS: number;
  lgwSb: number;
  "1B": number;
  BB: number;
}

export const calcWsb = (args: ICalcWsbArgs) => {
  return args.SB * 0.2 + args.CS * -0.397 - args.lgwSb * (args["1B"] + args.BB);
};

interface ICalcLgwsbArgs {
  SB: number;
  CS: number;
  "1B": number;
  BB: number;
}

export const calcLgwsb = (args: ICalcLgwsbArgs) => {
  return (args.SB * 0.2 + args.CS * -0.397) / (args["1B"] + args.BB);
};
