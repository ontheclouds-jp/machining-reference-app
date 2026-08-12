"use client";

import { useEffect, useState } from "react";
import { APP_VERSION, LAST_UPDATED } from "@/lib/version";

const USAGE_SECTIONS = [
  {
    title: "ザグリ寸法早見",
    body: "ねじの呼びを選ぶと、六角穴付きボルト（キャップボルト）用のざぐり径（D）・ざぐり深さ（H2）・取付け穴（d′）などの参考寸法がその場で表示されます。",
  },
  {
    title: "タップ下穴（並目・細目）",
    body: "ねじの呼びと並目／細目を選ぶと、かみあい率75%(標準)の推奨タップ下穴径とピッチが表示されます。該当する細目規格がないサイズは「規格なし」と表示されます。",
  },
  {
    title: "はめあい公差",
    body: "呼び径・穴の公差域クラス・軸の公差域クラスをそれぞれ選ぶと、穴と軸の最大/最小寸法、最大すきま・最小すきま、はめあいの種類（すきまばめ／中間ばめ／しまりばめ）が計算されます。",
  },
];

export default function HelpModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="help-trigger"
        onClick={() => setOpen(true)}
        aria-label="ヘルプ・バージョン情報"
      >
        ?
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label="ヘルプ・バージョン情報"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>ヘルプ・バージョン情報</h2>
              <button
                type="button"
                className="modal-close"
                onClick={() => setOpen(false)}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              {USAGE_SECTIONS.map((section) => (
                <div className="help-section" key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              ))}

              <div className="version-info">
                <div className="kv">
                  <span className="k">バージョン</span>
                  <span className="v">{APP_VERSION}</span>
                </div>
                <div className="kv">
                  <span className="k">最終更新日</span>
                  <span className="v">{LAST_UPDATED}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
