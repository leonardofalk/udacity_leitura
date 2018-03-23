---
inject: true
to: src/redux/sagas/index.js
after: redux-saga/effects
skip_if: import <%= NAME_CAMEL = name.replace(/\b\w/g, l => l.toUpperCase()) %>Saga
---
import <%= NAME_CAMEL %>Saga from './<%= NAME_CAMEL %>';
