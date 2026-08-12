import { ZaguriEntry, ZaguriSize } from "@/types";

export const zaguriData: Record<ZaguriSize, ZaguriEntry> = {
  M3: { ds: 3, dprime: 3.4, dk: 5.5, D: 6.5, K: 3, H2: 3.3 },
  M4: { ds: 4, dprime: 4.5, dk: 7, D: 8, K: 4, H2: 4.4 },
  M5: { ds: 5, dprime: 5.5, dk: 8.5, D: 9.5, K: 5, H2: 5.4 },
  M6: { ds: 6, dprime: 6.6, dk: 10, D: 11, K: 6, H2: 6.5 },
  M8: { ds: 8, dprime: 9, dk: 13, D: 14, K: 8, H2: 8.6 },
  M10: { ds: 10, dprime: 11, dk: 16, D: 17.5, K: 10, H2: 10.8 },
  M12: { ds: 12, dprime: 14, dk: 18, D: 20, K: 12, H2: 13 },
  M14: { ds: 14, dprime: 16, dk: 21, D: 23, K: 14, H2: 15.2 },
  M16: { ds: 16, dprime: 18, dk: 24, D: 26, K: 16, H2: 17.5 },
  M20: { ds: 20, dprime: 22, dk: 30, D: 32, K: 20, H2: 21.5 },
  M24: { ds: 24, dprime: 26, dk: 36, D: 39, K: 24, H2: 25.5 },
};

export const zaguriSizes = Object.keys(zaguriData) as ZaguriSize[];
