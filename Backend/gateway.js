const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// הפניית בקשות לשירות הפיננסים (לדוגמה)
app.use('/finances', createProxyMiddleware({
  target: 'http://localhost:4002', // כתובת ה־service האמיתי
  changeOrigin: true,
  pathRewrite: {
    '^/finances': '',
  },
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Gateway is running on http://localhost:${PORT}`);
});
console.log("Starting Gateway...");

