import { TapEntry, ZaguriSize } from "@/types";
import { zaguriSizes } from "./zaguriData";

export const tapSizes = zaguriSizes;

export const coarseData: Record<ZaguriSize, TapEntry> = {
  M3: { pitch: 0.5, drill: 2.5 },
  M4: { pitch: 0.7, drill: 3.3 },
  M5: { pitch: 0.8, drill: 4.2 },
  M6: { pitch: 1.0, drill: 5.0 },
  M8: { pitch: 1.25, drill: 6.8 },
  M10: { pitch: 1.5, drill: 8.5 },
  M12: { pitch: 1.75, drill: 10.2 },
  M14: { pitch: 2.0, drill: 12.0 },
  M16: { pitch: 2.0, drill: 14.0 },
  M20: { pitch: 2.5, drill: 17.5 },
  M24: { pitch: 3.0, drill: 21.0 },
};

export const fineData: Partial<Record<ZaguriSize, TapEntry>> = {
  M6: { pitch: 0.75, drill: 5.25 },
  M8: { pitch: 1.0, drill: 7.0 },
  M10: { pitch: 1.25, drill: 8.8 },
  M12: { pitch: 1.5, drill: 10.5 },
  M14: { pitch: 1.5, drill: 12.5 },
  M16: { pitch: 1.5, drill: 14.5 },
  M20: { pitch: 1.5, drill: 18.5 },
  M24: { pitch: 2.0, drill: 22.0 },
};
