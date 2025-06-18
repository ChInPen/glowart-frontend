const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 提供 build 靜態檔案
app.use(express.static(path.join(__dirname, 'build')));

// 所有其他路由都導回 index.html（適用於 React Router）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
