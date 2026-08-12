import { ToleranceClassDef } from "@/types";

export const holeClasses: Record<string, ToleranceClassDef> = {
  F7: {
    label: "F7（すきまばめ・広め）",
    vals: [
      { upTo: 6, v: [22, 10] },
      { upTo: 10, v: [28, 13] },
      { upTo: 18, v: [34, 16] },
      { upTo: 30, v: [41, 20] },
      { upTo: 50, v: [50, 25] },
      { upTo: 80, v: [60, 30] },
      { upTo: 120, v: [71, 36] },
    ],
  },
  G6: {
    label: "G6（すきまばめ・精密）",
    vals: [
      { upTo: 6, v: [12, 4] },
      { upTo: 10, v: [14, 5] },
      { upTo: 18, v: [17, 6] },
      { upTo: 30, v: [20, 7] },
      { upTo: 50, v: [25, 9] },
      { upTo: 80, v: [29, 10] },
      { upTo: 120, v: [34, 12] },
    ],
  },
  G7: {
    label: "G7（すきまばめ・標準）",
    vals: [
      { upTo: 6, v: [16, 4] },
      { upTo: 10, v: [20, 5] },
      { upTo: 18, v: [24, 6] },
      { upTo: 30, v: [28, 7] },
      { upTo: 50, v: [34, 9] },
      { upTo: 80, v: [40, 10] },
      { upTo: 120, v: [47, 12] },
    ],
  },
  H6: {
    label: "H6（すきまばめ・精密基準穴）",
    vals: [
      { upTo: 6, v: [8, 0] },
      { upTo: 10, v: [9, 0] },
      { upTo: 18, v: [11, 0] },
      { upTo: 30, v: [13, 0] },
      { upTo: 50, v: [16, 0] },
      { upTo: 80, v: [19, 0] },
      { upTo: 120, v: [22, 0] },
    ],
  },
  H7: {
    label: "H7（最も一般的な基準穴）",
    vals: [
      { upTo: 6, v: [12, 0] },
      { upTo: 10, v: [15, 0] },
      { upTo: 18, v: [18, 0] },
      { upTo: 30, v: [21, 0] },
      { upTo: 50, v: [25, 0] },
      { upTo: 80, v: [30, 0] },
      { upTo: 120, v: [35, 0] },
    ],
  },
  H8: {
    label: "H8（基準穴・やや粗い）",
    vals: [
      { upTo: 6, v: [18, 0] },
      { upTo: 10, v: [22, 0] },
      { upTo: 18, v: [27, 0] },
      { upTo: 30, v: [33, 0] },
      { upTo: 50, v: [39, 0] },
      { upTo: 80, v: [46, 0] },
      { upTo: 120, v: [54, 0] },
    ],
  },
  H9: {
    label: "H9（基準穴・一般公差）",
    vals: [
      { upTo: 6, v: [30, 0] },
      { upTo: 10, v: [36, 0] },
      { upTo: 18, v: [43, 0] },
      { upTo: 30, v: [52, 0] },
      { upTo: 50, v: [62, 0] },
      { upTo: 80, v: [74, 0] },
      { upTo: 120, v: [87, 0] },
    ],
  },
};

export const shaftClasses: Record<string, ToleranceClassDef> = {
  g6: {
    label: "g6（すきまばめ・精密すべり）",
    vals: [
      { upTo: 6, v: [-4, -12] },
      { upTo: 10, v: [-5, -14] },
      { upTo: 18, v: [-6, -17] },
      { upTo: 30, v: [-7, -20] },
      { upTo: 50, v: [-9, -25] },
      { upTo: 80, v: [-10, -29] },
      { upTo: 120, v: [-12, -34] },
    ],
  },
  h6: {
    label: "h6（すきまばめ・標準）",
    vals: [
      { upTo: 6, v: [0, -8] },
      { upTo: 10, v: [0, -9] },
      { upTo: 18, v: [0, -11] },
      { upTo: 30, v: [0, -13] },
      { upTo: 50, v: [0, -16] },
      { upTo: 80, v: [0, -19] },
      { upTo: 120, v: [0, -22] },
    ],
  },
  h7: {
    label: "h7（すきまばめ・一般）",
    vals: [
      { upTo: 6, v: [0, -12] },
      { upTo: 10, v: [0, -15] },
      { upTo: 18, v: [0, -18] },
      { upTo: 30, v: [0, -21] },
      { upTo: 50, v: [0, -25] },
      { upTo: 80, v: [0, -30] },
      { upTo: 120, v: [0, -35] },
    ],
  },
  js6: {
    label: "js6（中間ばめ）",
    vals: [
      { upTo: 6, v: [4, -4] },
      { upTo: 10, v: [4.5, -4.5] },
      { upTo: 18, v: [5.5, -5.5] },
      { upTo: 30, v: [6.5, -6.5] },
      { upTo: 50, v: [8, -8] },
      { upTo: 80, v: [9.5, -9.5] },
      { upTo: 120, v: [11, -11] },
    ],
  },
  k6: {
    label: "k6（中間ばめ・軽い締結）",
    vals: [
      { upTo: 6, v: [9, 1] },
      { upTo: 10, v: [10, 1] },
      { upTo: 18, v: [12, 1] },
      { upTo: 30, v: [15, 2] },
      { upTo: 50, v: [18, 2] },
      { upTo: 80, v: [21, 2] },
      { upTo: 120, v: [25, 3] },
    ],
  },
  n6: {
    label: "n6（しまりばめ・軽圧入）",
    vals: [
      { upTo: 6, v: [16, 8] },
      { upTo: 10, v: [19, 10] },
      { upTo: 18, v: [23, 12] },
      { upTo: 30, v: [28, 15] },
      { upTo: 50, v: [33, 17] },
      { upTo: 80, v: [39, 20] },
      { upTo: 120, v: [45, 23] },
    ],
  },
  p6: {
    label: "p6（しまりばめ・圧入）",
    vals: [
      { upTo: 6, v: [20, 12] },
      { upTo: 10, v: [24, 15] },
      { upTo: 18, v: [29, 18] },
      { upTo: 30, v: [35, 22] },
      { upTo: 50, v: [42, 26] },
      { upTo: 80, v: [51, 32] },
      { upTo: 120, v: [59, 37] },
    ],
  },
};

export const tolSizes = [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 24, 25, 30, 40, 50, 63, 80, 100];
