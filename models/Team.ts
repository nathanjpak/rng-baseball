import { Realm } from "@realm/react";

export class Team extends Realm.Object<Team> {
  name!: string;
  shorthand: string;
  wins: number = 0;
  losses: number = 0;

  static schema = {
    name: "Team",
    properties: {
      name: "string",
      wins: "int",
      losses: "int",
    },
    primaryKey: "shorthand",
  };

  constructor(realm: Realm, name: string) {
    super(realm, { name: name });
  }
}
