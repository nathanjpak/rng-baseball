import { Realm } from "@realm/react";

export type TPosition =
  | "SP"
  | "RP"
  | "C"
  | "1B"
  | "2B"
  | "3B"
  | "SS"
  | "LF"
  | "CF"
  | "RF"
  | "DH";

export type TTier = "R" | "SR" | "SSR" | "UR" | "L";

export interface IBatterAttributes {
  con: number;
  pwr: number;
  eye: number;
  spd: number;
  fld: number;
  thr: number;
  clu: number;
}

export interface IPitcherAttributes {
  cmd: number;
  velo: number;
  brk: number;
  sta: number;
  rec: number;
  men: number;
  clu: number;
}

export interface IBatterStats {
  PA: number;
  AB: number;
  H: number;
  "2B": number;
  "3B": number;
  HR: number;
  RBI: number;
  R: number;
  K: number;
  BB: number;
  GIDP: number;
  SB: number;
  CS: number;
  IP: number;
}

export interface IPitcherStats {
  IP: number;
}

export class Player extends Realm.Object<Player> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  attributes: IBatterAttributes | IPitcherAttributes;
  position!: TPosition;
  tier!: TTier;
  throws: "R" | "L";
  bats: "R" | "L" | "S";
  stats: IBatterAttributes | IPitcherAttributes;

  static schema = {
    name: "Player",
    properties: {
      wins: "int",
      losses: "int",
    },
    primaryKey: "_id",
  };

  // constructor(realm: Realm, name: string) {
  //   super(realm, { name: name });
  // }
}
