"use client";

import { useState } from "react";
import { coarseData, fineData, tapSizes } from "@/lib/data/tapData";
import { PitchType, ZaguriSize } from "@/types";
import TapDiagram from "./TapDiagram";

export default function TapPanel() {
  const [size, setSize] = useState<ZaguriSize>("M10");
  const [pitchType, setPitchType] = useState<PitchType>("coarse");

  const table = pitchType === "coarse" ? coarseData : fineData;
  const entry = table[size];
  const label = pitchType === "coarse" ? "並目" : "細目";

  return (
    <div>
      <p className="sub">
        ねじの呼びと<b>並目／細目</b>を選ぶと、かみあい率75%(標準)の
        <b>タップ下穴径</b>を表示します。
      </p>

      <div className="control-row">
        <label htmlFor="tapSize">ねじの呼び</label>
        <select id="tapSize" value={size} onChange={(e) => setSize(e.target.value as ZaguriSize)}>
          {tapSizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <div className="toggle-group">
          <button
            type="button"
            className={`toggle-btn${pitchType === "coarse" ? " active" : ""}`}
            onClick={() => setPitchType("coarse")}
          >
            並目
          </button>
          <button
            type="button"
            className={`toggle-btn${pitchType === "fine" ? " active" : ""}`}
            onClick={() => setPitchType("fine")}
          >
            細目
          </button>
        </div>
        <span className="std-note">単位: mm ／ かみあい率 75%</span>
      </div>

      <div className="layout">
        <div className="diagram-panel">
          <span className="tag">SEC. VIEW</span>
          <TapDiagram entry={entry} />
        </div>

        <div className="table-panel">
          <h2>
            {size} {label} の下穴
          </h2>
          {entry ? (
            <div>
              <div className="big-readout">
                <div className="label">推奨下穴径（標準 75%）</div>
                <div className="value">
                  {entry.drill}
                  <span className="unit">mm</span>
                </div>
              </div>
              <div className="kv">
                <span className="k">
                  <span className="sym">P</span> ピッチ
                </span>
                <span className="v">
                  {entry.pitch}
                  <span className="unit">mm</span>
                </span>
              </div>
              <div className="kv">
                <span className="k">計算式</span>
                <span className="v" style={{ fontSize: 13, fontWeight: 500 }}>
                  {size.replace("M", "")} − {entry.pitch} = {entry.drill}
                </span>
              </div>
            </div>
          ) : (
            <div className="no-fine">
              {size} には一般的な細目規格がありません。
              <br />
              並目をご確認ください。
            </div>
          )}
          <div className="footnote">
            下穴径 = 呼び径 − ピッチ（かみあい率 約75%、JIS B 0205基準）。材質やタップの種類（ハンド／スパイラル／ポイント／転造）により最適値は変動するため、SUS等の難削材や薄板では現場の標準・タップメーカーの推奨値を優先してください。
          </div>
        </div>
      </div>
    </div>
  );
}
