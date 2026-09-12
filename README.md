# 機械加工 寸法早見

生産技術者・機械設計者・機械加工オペレーター向けの寸法早見PWAアプリ。ザグリ寸法・タップ下穴の2タブを1画面に集約し、スマホでサイズを選ぶだけで参考値を表示します。

詳細は `docs/機械加工寸法早見アプリ_実装仕様書.md` を参照してください。プロトタイプは `docs/machining-reference.html` にあります。

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認してください。

## ビルド

```bash
npm run build
npm run start
```

## 構成

- `src/app` — ページ・レイアウト・グローバルスタイル
- `src/components` — タブ（ザグリ／タップ下穴）ごとのUI
- `src/lib/data` — 仕様書3章のデータ定数
- `public/manifest.json`, `public/sw.js` — PWA対応（ホーム画面追加・簡易オフラインキャッシュ）

## 現在の対応範囲（フェーズ1）

3タブ全機能のPWA化まで実装済みです。オフライン対応の詳細な調整やお気に入り機能等は今後のフェーズで対応予定です。
