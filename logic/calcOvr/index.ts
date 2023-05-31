export interface batterStats {
  con: number;
  pwr: number;
  eye: number;
  spd: number;
  fld: number;
  thr: number;
  clu: number;
}

const calcCatcher = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.18 * con +
      0.18 * pwr +
      0.15 * eye +
      0.05 * spd +
      0.23 * fld +
      0.26 * thr +
      0.05 * clu) /
    1.1
  );
};

const calc1B = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.27 * con +
      0.28 * pwr +
      0.2 * eye +
      0.07 * spd +
      0.13 * fld +
      0.1 * thr +
      0.05 * clu) /
    1.1
  );
};

const calc2B = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.2 * con +
      0.18 * pwr +
      0.17 * eye +
      0.12 * spd +
      0.23 * fld +
      0.15 * thr +
      0.05 * clu) /
    1.1
  );
};

const calc3B = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.19 * con +
      0.21 * pwr +
      0.15 * eye +
      0.1 * spd +
      0.18 * fld +
      0.22 * thr +
      0.05 * clu) /
    1.1
  );
};

const calcSS = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.16 * con +
      0.12 * pwr +
      0.13 * eye +
      0.12 * spd +
      0.27 * fld +
      0.25 * thr +
      0.05 * clu) /
    1.1
  );
};

const calcLF = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.2 * con +
      0.21 * pwr +
      0.15 * eye +
      0.14 * spd +
      0.15 * fld +
      0.2 * thr +
      0.05 * clu) /
    1.1
  );
};

const calcCF = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.17 * con +
      0.1 * pwr +
      0.18 * eye +
      0.2 * spd +
      0.2 * fld +
      0.2 * thr +
      0.05 * clu) /
    1.1
  );
};

const calcRF = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.2 * con +
      0.25 * pwr +
      0.15 * eye +
      0.1 * spd +
      0.13 * fld +
      0.22 * thr +
      0.05 * clu) /
    1.1
  );
};

const calcDH = ({ con, pwr, eye, spd, fld, thr, clu }: batterStats) => {
  return (
    (0.35 * con +
      0.35 * pwr +
      0.21 * eye +
      0.1 * spd +
      0.01 * fld +
      0.01 * thr +
      0.07 * clu) /
    1.1
  );
};
