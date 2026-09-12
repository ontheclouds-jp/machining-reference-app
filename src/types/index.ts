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

export type CategoryKey = "zaguri" | "tap";
