"use client";

import { useState } from "react";
import { zaguriData, zaguriSizes } from "@/lib/data/zaguriData";
import { ZaguriSize } from "@/types";
import ZaguriDiagram from "./ZaguriDiagram";

export default function ZaguriPanel() {
  const [size, setSize] = useState<ZaguriSize>("M4");
  const data = zaguriData[size];

  return (
    <div>
      <p className="sub">
        ねじの呼びを選ぶと、<b>D（ざぐり径）</b>・<b>d&prime;（取付け穴）</b>・
        <b>H2（ざぐり深さ）</b>をその場で表示します。
      </p>

      <div className="control-row">
        <label htmlFor="zaguriSize">ねじの呼び (d)</label>
        <select
          id="zaguriSize"
          value={size}
          onChange={(e) => setSize(e.target.value as ZaguriSize)}
        >
          {zaguriSizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <span className="std-note">単位: mm</span>
      </div>

      <div className="layout">
        <div className="diagram-panel">
          <span className="tag">SEC. VIEW</span>
          <ZaguriDiagram data={data} />
        </div>

        <div className="table-panel">
          <h2>{size} の寸法</h2>
          <div className="kv primary">
            <span className="k">
              <span className="sym">D</span> ざぐり径
            </span>
            <span className="v">
              {data.D}
              <span className="unit">mm</span>
            </span>
          </div>
          <div className="kv primary">
            <span className="k">
              <span className="sym">H2</span> ざぐり深さ
            </span>
            <span className="v">
              {data.H2}
              <span className="unit">mm</span>
            </span>
          </div>
          <div className="kv">
            <span className="k">
              <span className="sym">d&prime;</span> 取付け穴
            </span>
            <span className="v">
              {data.dprime}
              <span className="unit">mm</span>
            </span>
          </div>
          <div className="kv">
            <span className="k">
              <span className="sym">ds</span> タップ径
            </span>
            <span className="v">
              {data.ds}
              <span className="unit">mm</span>
            </span>
          </div>
          <div className="kv">
            <span className="k">
              <span className="sym">dk</span> 頭部径
            </span>
            <span className="v">
              {data.dk}
              <span className="unit">mm</span>
            </span>
          </div>
          <div className="kv">
            <span className="k">
              <span className="sym">K</span> 頭部高さ
            </span>
            <span className="v">
              {data.K}
              <span className="unit">mm</span>
            </span>
          </div>

          <div className="footnote">
            六角穴付きボルト（キャップボルト）用のざぐり・ボルト穴参考値。d&prime; は JIS B
            1001（2級）、ざぐり寸法は各メーカー公表値に基づく参考値です。深ざぐりに関する統一JIS規格は存在しないため、実際の加工では図面指示・使用メーカーの公差を確認してください。
          </div>
        </div>
      </div>
    </div>
  );
}
