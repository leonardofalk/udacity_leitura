---
inject: true
to: src/redux/sagas/index.js
after: redux-saga/effects
skip_if: import <%= name %>Saga
---
import <%= name %>Saga from './<%= name %>';
