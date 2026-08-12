<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## プロジェクト固有ルール: バージョン管理

`src/lib/version.ts` に `APP_VERSION`（例: `v1.0.0`）と `LAST_UPDATED`（`YYYY-MM-DD`）を定義している。アプリ内のヘルプ画面（`HelpModal`）に表示される。

ユーザーから機能追加・修正の依頼を受けて変更を行うたびに、この2つの値を更新すること。
- パッチ版（バグ修正・軽微な調整）: パッチ番号を+1（例: v1.0.0 → v1.0.1）
- マイナー版（新機能追加）: マイナー番号を+1しパッチを0に（例: v1.0.1 → v1.1.0）
- メジャー版（破壊的変更・大規模刷新）: メジャー番号を+1しマイナー・パッチを0に
- `LAST_UPDATED` は変更を行った日付に更新する

`public/sw.js` の `CACHE_NAME` も `APP_VERSION` と同じ値に合わせて更新すること。これを怠ると、Service Workerが古いキャッシュを返し続け、ユーザーの画面が更新されない（PWAとしてインストール済みの場合は特に顕著）。
