
const fs = require('fs-extra');
const path = require('path');

const source = path.join(__dirname, 'public', 'images');

const destination = path.join(__dirname, 'build', 'images');

fs.copy(source, destination)
  .then(() => console.log('✅ 所有 public/images 圖片已複製到 build/images'))
  .catch(err => console.error('❌ 複製圖片失敗:', err));
