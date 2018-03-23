---
inject: true
to: src/redux/sagas/index.js
after: all\(\[
skip_if: <%= NAME_CAMEL = name.replace(/\b\w/g, l => l.toUpperCase()) %>
---
    fork(<%= NAME_CAMEL %>Saga),
