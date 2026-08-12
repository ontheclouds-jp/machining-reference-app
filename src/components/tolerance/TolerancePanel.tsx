"use client";

import { useMemo, useState } from "react";
import { holeClasses, shaftClasses, tolSizes } from "@/lib/data/toleranceData";
import { calcFit, findBracket } from "@/lib/tolerance";
import ToleranceDiagram from "./ToleranceDiagram";

export default function TolerancePanel() {
  const [nominal, setNominal] = useState(10);
  const [holeKey, setHoleKey] = useState("H7");
  const [shaftKey, setShaftKey] = useState("g6");

  const holeDef = holeClasses[holeKey];
  const shaftDef = shaftClasses[shaftKey];

  const result = useMemo(() => {
    const holeBracket = findBracket(nominal, holeDef.vals);
    const shaftBracket = findBracket(nominal, shaftDef.vals);
    return { ...calcFit(nominal, holeBracket, shaftBracket), holeBracket, shaftBracket };
  }, [nominal, holeDef, shaftDef]);

  const fmt = (n: number) => n.toFixed(3);
  const fmtSigned = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(3);

  return (
    <div>
      <p className="sub">
        <b>穴</b>と<b>軸</b>それぞれの公差域クラスを選ぶと、はめあい(すきま／しめしろ)を計算します。
      </p>

      <div className="control-row">
        <label htmlFor="tolSize">呼び径 (mm)</label>
        <select id="tolSize" value={nominal} onChange={(e) => setNominal(Number(e.target.value))}>
          {tolSizes.map((s) => (
            <option key={s} value={s}>
              φ{s}
            </option>
          ))}
        </select>
        <label htmlFor="tolHole">穴の公差域クラス</label>
        <select id="tolHole" value={holeKey} onChange={(e) => setHoleKey(e.target.value)}>
          {Object.entries(holeClasses).map(([key, def]) => (
            <option key={key} value={key}>
              {def.label}
            </option>
          ))}
        </select>
        <label htmlFor="tolShaft">軸の公差域クラス</label>
        <select id="tolShaft" value={shaftKey} onChange={(e) => setShaftKey(e.target.value)}>
          {Object.entries(shaftClasses).map(([key, def]) => (
            <option key={key} value={key}>
              {def.label}
            </option>
          ))}
        </select>
      </div>

      <div className="layout">
        <div className="diagram-panel">
          <span className="tag">TOLERANCE ZONE</span>
          <ToleranceDiagram
            holeKey={holeKey}
            shaftKey={shaftKey}
            holeUpper={result.holeBracket.v[0] / 1000}
            holeLower={result.holeBracket.v[1] / 1000}
            shaftUpper={result.shaftBracket.v[0] / 1000}
            shaftLower={result.shaftBracket.v[1] / 1000}
          />
        </div>

        <div className="table-panel">
          <h2>
            φ{nominal} {holeKey} / {shaftKey}
          </h2>
          <div className="big-readout">
            <div className="label">はめあいの種類</div>
            <div className="value" style={{ fontSize: 26 }}>
              {result.fitType}
            </div>
          </div>
          <div className="kv">
            <span className="k">穴 最大 / 最小</span>
            <span className="v" style={{ fontSize: 15 }}>
              {fmt(result.holeMax)} / {fmt(result.holeMin)} mm
            </span>
          </div>
          <div className="kv">
            <span className="k">軸 最大 / 最小</span>
            <span className="v" style={{ fontSize: 15 }}>
              {fmt(result.shaftMax)} / {fmt(result.shaftMin)} mm
            </span>
          </div>
          <div className="kv primary">
            <span className="k">最大すきま(＋)／しめしろ(－)</span>
            <span className="v">
              {fmtSigned(result.maxGap)}
              <span className="unit">mm</span>
            </span>
          </div>
          <div className="kv primary">
            <span className="k">最小すきま(＋)／しめしろ(－)</span>
            <span className="v">
              {fmtSigned(result.minGap)}
              <span className="unit">mm</span>
            </span>
          </div>
          <div className="footnote">
            JIS B 0401抜粋。穴は加工のしやすさから公差域クラスH系を基準にするのが一般的ですが、本ツールでは穴・軸どちらのクラスも自由に組み合わせて計算できます。値はμm(1/1000mm)単位の寸法許容差を呼び径に加算して算出しています。実際の図面指示・検査基準を優先してください。
          </div>
        </div>
      </div>
    </div>
  );
}
