const path = require('path');

module.exports = {
    "@apis": path.join(__dirname, "./src/apis/index.ts"),
    "@components": path.join(__dirname, "./src/components/index.ts"),
    "@models": path.join(__dirname, "./src/models/index.ts"),
    "@services": path.join(__dirname, "./src/services/index.ts"),
    "@svgs": path.join(__dirname, "./src/svgs/index.ts"),
  }