import { FitType, ToleranceBracket } from "@/types";

export function findBracket(nominal: number, arr: ToleranceBracket[]): ToleranceBracket {
  for (const b of arr) {
    if (nominal <= b.upTo) return b;
  }
  return arr[arr.length - 1];
}

export interface FitResult {
  holeMax: number;
  holeMin: number;
  shaftMax: number;
  shaftMin: number;
  maxGap: number;
  minGap: number;
  fitType: FitType;
}

export function calcFit(
  nominal: number,
  holeBracket: ToleranceBracket,
  shaftBracket: ToleranceBracket
): FitResult {
  const holeUpper = holeBracket.v[0] / 1000;
  const holeLower = holeBracket.v[1] / 1000;
  const shaftUpper = shaftBracket.v[0] / 1000;
  const shaftLower = shaftBracket.v[1] / 1000;

  const holeMax = nominal + holeUpper;
  const holeMin = nominal + holeLower;
  const shaftMax = nominal + shaftUpper;
  const shaftMin = nominal + shaftLower;

  const maxGap = holeMax - shaftMin;
  const minGap = holeMin - shaftMax;

  let fitType: FitType;
  if (minGap >= 0) fitType = "すきまばめ";
  else if (maxGap <= 0) fitType = "しまりばめ";
  else fitType = "中間ばめ";

  return { holeMax, holeMin, shaftMax, shaftMin, maxGap, minGap, fitType };
}
