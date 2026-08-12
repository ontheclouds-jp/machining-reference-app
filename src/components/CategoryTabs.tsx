"use client";

import { CategoryKey } from "@/types";

const TABS: { key: CategoryKey; label: string }[] = [
  { key: "zaguri", label: "ザグリ寸法早見" },
  { key: "tap", label: "タップ下穴（並目・細目）" },
  { key: "tolerance", label: "はめあい公差" },
];

interface Props {
  active: CategoryKey;
  onChange: (key: CategoryKey) => void;
}

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="cat-tabs">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          className={`cat-tab${active === tab.key ? " active" : ""}`}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
