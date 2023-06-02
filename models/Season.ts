import { Realm } from "@realm/react";

export interface ILeagueStats {
  PA: number;
  H: number;
  "2B": number;
  "3B": number;
  HR: number;
  BB: number;
  SB: number;
  CS: number;
  R: number;
  IP: number;
  wOBA: number;
}

export class Season extends Realm.Object<Season> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  gamesPlayed: number = 0;
  leagueStats: ILeagueStats = {
    PA: 0,
    H: 0,
    "2B": 0,
    "3B": 0,
    HR: 0,
    BB: 0,
    SB: 0,
    CS: 0,
    R: 0,
    IP: 0,
    wOBA: 0.0,
  };

  static schema = {
    name: "Season",
    properties: {
      _id: "objectId",
      gamesPlayed: "int",
      leagueStats: "mixed",
    },
    primaryKey: "_id",
  };
}
