const fs = require('fs');
const path = require('path');

const from = path.join(__dirname, 'public', '_redirects');
const to = path.join(__dirname, 'build', '_redirects');

fs.copyFileSync(from, to);
console.log('✅ _redirects copied to build folder');
