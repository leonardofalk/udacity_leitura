---
inject: true
to: src/redux/sagas/index.js
after: all\(\[
skip_if: <%= name %>
---
    fork(<%= name %>Saga),
