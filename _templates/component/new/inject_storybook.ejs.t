---
inject: true
to: src/stories/index.js
after: export
skip_if: export \* from './components/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>';
---
export * from './components/<%= NAME %>';