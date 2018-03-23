---
inject: true
to: src/redux/reducers/index.js
before: \}\)
skip_if: <%= name %>
---
  <%= name.toLowerCase() %>: require('./<%= name.replace(/\b\w/g, l => l.toUpperCase()) %>').reducer,
