"use client";

import { useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import HelpModal from "@/components/HelpModal";
import ZaguriPanel from "@/components/zaguri/ZaguriPanel";
import TapPanel from "@/components/tap/TapPanel";
import { CategoryKey } from "@/types";

export default function Home() {
  const [category, setCategory] = useState<CategoryKey>("zaguri");

  return (
    <div className="wrap">
      <div className="header-row">
        <div>
          <p className="eyebrow">Machining Reference / 加工現場向け参考値</p>
          <h1>穴加工わかる君</h1>
        </div>
        <HelpModal />
      </div>

      <CategoryTabs active={category} onChange={setCategory} />

      <div className={`panel-view${category === "zaguri" ? " active" : ""}`}>
        <ZaguriPanel />
      </div>
      <div className={`panel-view${category === "tap" ? " active" : ""}`}>
        <TapPanel />
      </div>
    </div>
  );
}
