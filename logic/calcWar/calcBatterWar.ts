import { TPosition, IBatterStats } from "../../models/Player";
import { ILeagueStats } from "../../models/Season";

const calcBatterWar = (
  playerStats: IBatterStats,
  leagueStats: ILeagueStats
) => {
  // (Batting Runs + Base Running Runs + Fielding Runs + Positional Adjustment + League Adjustment + Replacement Runs) / (Runs Per Win)
  // Batting Runs = wRAA = ((wOBA - lgwOBA)/wOBA scale) * PA
  // Baserunning Runs = wSB + (wGDP) + (UBR)
  // Fielding Runs tbd
  // Positional Adjustment
  // League Adjustment
  const wRAA = calcBaseRunningRuns();
};

const calcBattingRuns = () => {};

const calcBaseRunningRuns = () => {};

// const calcFieldingRuns = () => {};

const calcPositionalAdjustment = (position: TPosition, IP: number) => {
  switch (position) {
    case "1B":
      return (IP / 9 / 162) * -12.5;
    case "2B":
      return (IP / 9 / 162) * 2.5;
    case "3B":
      return (IP / 9 / 162) * 2.5;
    case "SS":
      return (IP / 9 / 162) * 7.5;
    case "LF":
      return (IP / 9 / 162) * -7.5;
    case "CF":
      return (IP / 9 / 162) * 2.5;
    case "RF":
      return (IP / 9 / 162) * -7.5;
    case "DH":
      return (IP / 9 / 162) * -17.5;
    case "C":
      return (IP / 9 / 162) * 12.5;
  }
};

const calcRunsPerWin = (leagueRuns: number, leagueInningsPitched: number) => {
  return 9 * (leagueRuns / leagueInningsPitched) * 1.5 + 3;
};

const calcReplacementRuns = (
  leagueGames: number,
  RPW: number,
  leaguePA: number,
  PA: number
) => {
  return 570 * (leagueGames / 2430) * (RPW / leaguePA) * PA;
};
