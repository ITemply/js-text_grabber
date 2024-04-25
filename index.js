var Tesseract = require('tesseract.js');

Tesseract.recognize(
  'images/eng_bw.png',
  'eng',
  { logger: m => console.log('Progress: '+m['progress']) }
).then(({ data: { text } }) => {
  console.log(text);
})