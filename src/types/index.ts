export type ZaguriSize =
  | "M3" | "M4" | "M5" | "M6" | "M8" | "M10"
  | "M12" | "M14" | "M16" | "M20" | "M24";

export interface ZaguriEntry {
  ds: number;
  dprime: number;
  dk: number;
  D: number;
  K: number;
  H2: number;
}

export type PitchType = "coarse" | "fine";

export interface TapEntry {
  pitch: number;
  drill: number;
}

export interface ToleranceBracket {
  upTo: number;
  /** [upper, lower] allowance in micrometers (µm) */
  v: [number, number];
}

export interface ToleranceClassDef {
  label: string;
  vals: ToleranceBracket[];
}

export type FitType = "すきまばめ" | "中間ばめ" | "しまりばめ";

export type CategoryKey = "zaguri" | "tap" | "tolerance";
